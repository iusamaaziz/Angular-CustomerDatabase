using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CustomerDatabase.Shared;
using Customers.WebApi;

namespace Customers.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly CustomersDbContext _context;

        public AddressesController(CustomersDbContext context)
        {
            _context = context;
        }

        [HttpGet("/byCustomer/{customerId}")]
        public async Task<IActionResult> GetAddressesByCustomerId([FromRoute] int customerId)
        {
            var addresses = await _context.Addresses.Where(ad => ad.CustomerId == customerId).ToListAsync();

            return Ok(addresses);
        }

        [HttpDelete("{ids}")]
        public async Task<IActionResult> DeletePhoneNumber(string ids)
        {
            if (_context.Addresses == null)
            {
                return NotFound();
            }

            string[] splits = ids.Split(',');

            foreach (var id in splits)
            {
                var address = await _context.Addresses.FindAsync(Convert.ToInt32(id));
                if (address == null)
                {
                    return Ok();
                }

                _context.Addresses.Remove(address);
            }

            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
