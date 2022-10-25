using Customers.WebApi;
using Customers.WebApi.Controllers;
using Customers.WebApi.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDatabase.Shared
{
    public class Customer : BaseModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public virtual List<Address> Addresses { get; set; }

    }
}
