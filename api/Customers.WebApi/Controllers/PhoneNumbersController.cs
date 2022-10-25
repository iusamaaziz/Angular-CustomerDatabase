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
    public class PhoneNumbersController : ControllerBase
    {
        private readonly CustomersDbContext _context;

        public PhoneNumbersController(CustomersDbContext context)
        {
            _context = context;
        }

        [HttpGet("/byAddress/{addressId}")]
        public async Task<IActionResult> GetPhoneNumbersByAddress([FromRoute] int addressId)
        {
            if (_context.PhoneNumbers == null)
            {
                return NotFound();
            }
            var phoneNumber = await _context.PhoneNumbers.Where(p => p.AddressId == addressId).ToListAsync();

            return Ok(phoneNumber);
        }

        [HttpDelete("{ids}")]
        public async Task<IActionResult> DeletePhoneNumber(string ids)
        {
            if (_context.PhoneNumbers == null)
            {
                return NotFound();
            }

            string[] splits = ids.Split(',');

			foreach (var id in splits)
			{
                var phoneNumber = await _context.PhoneNumbers.FindAsync(Convert.ToInt32(id));
                if (phoneNumber == null)
                {
                    return Ok();
                }

                _context.PhoneNumbers.Remove(phoneNumber);
            }

            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
