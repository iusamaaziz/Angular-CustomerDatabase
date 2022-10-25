using Customers.WebApi.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDatabase.Shared
{
    public class PhoneNumber : BaseModel
    {
        public int Id { get; set; }
        public string Number { get; set; }

        public int AddressId { get; set; }
        public virtual Address? Address { get; set; }
    }
}
