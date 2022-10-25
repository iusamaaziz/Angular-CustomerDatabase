using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CustomerDatabase.Shared;
using Customers.WebApi;
using Customers.WebApi.Models;
using System.Linq.Expressions;
using NuGet.ContentModel;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Reflection;

namespace Customers.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly CustomersDbContext _context;

        public CustomersController(CustomersDbContext context)
        {
            _context = context;
        }

        [HttpGet("search/{firstName}/{lastName}")]
        public async Task<ActionResult<Customer>> GetCustomer([FromRoute] string firstName, [FromRoute] string lastName)
        {
            if (_context.Customers == null)
            {
                return NotFound();
            }
            var customer = await _context.Customers
                .Where(x => x.FirstName == firstName && x.LastName == lastName)
                .Include(c => c.Addresses)
                .ThenInclude(a => a.PhoneNumbers)
                .AsNoTracking()
                .FirstOrDefaultAsync();
                

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        private IEnumerable<T> NotifyAllChildren<T>(T entity) where T: EntityEntry<BaseModel>
        {
            if (entity == null)
                yield break;
            yield return entity;
			
			foreach (var item in entity.Navigations)
			{
				foreach (BaseModel value in item.CurrentValue as BaseModel[])
				{
                    _context.Entry(value).State = value.ObjectState.ToEntityState();
                    foreach (T child in NotifyAllChildren(_context.Entry(value)))
						yield return child;
					
				}
            }
        }

        private IEnumerable<dynamic> NotifyAllChildren1(dynamic entity)
        {
            if (entity == null)
                yield break;
            yield return entity;
			
            foreach (var item in entity.Navigations)
            {
                foreach (dynamic value in item.CurrentValue)
                {
                    foreach (var child in NotifyAllChildren(_context.Entry(value)))
                        yield return child;
                }
            }
        }

        [HttpPost]
		public async Task<ActionResult<Customer>> UpsertCustomer(Customer model)
        {
            if (model.Id == 0)
			{
				await _context.Customers.AddAsync(model);
			}
            else
			{
				_context.ChangeTracker.TrackGraph(
				model,
				n =>
				{
					var entity = (BaseModel)n.Entry.Entity;
					n.Entry.State = entity.ObjectState == ObjectState.Added
						? EntityState.Added
						: entity.ObjectState == ObjectState.Modified
							? EntityState.Modified
							: entity.ObjectState == ObjectState.Deleted
								? EntityState.Deleted
								: EntityState.Unchanged;
				});

				
            }

            try
            {
                await _context.SaveChangesAsync();
				
                return Ok(model);
            }
			catch(DbUpdateConcurrencyException ex)
			{
                throw ex;
			}
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }

	public static class Extensions
	{
		public static EntityState ToEntityState(this ObjectState state)
		{
			switch (state)
			{
				case ObjectState.Unchanged:
                    return EntityState.Unchanged;
				case ObjectState.Added:
                    return EntityState.Added;
				case ObjectState.Modified:
                    return EntityState.Modified;
				case ObjectState.Deleted:
                    return EntityState.Deleted;
				default:
					return EntityState.Unchanged;
			}
		}
	}
}

