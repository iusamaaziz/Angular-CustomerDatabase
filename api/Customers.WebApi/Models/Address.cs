using Customers.WebApi.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDatabase.Shared
{
    public class Address : BaseModel
    {
        public int Id { get; set; }
		public string AddressType { get; set; }
		public string StreetAddress1 { get; set; }
        public string StreetAddress2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }

        public int CustomerId { get; set; }

        public virtual Customer? Customer { get; set; }
        public virtual List<PhoneNumber> PhoneNumbers { get; set; }
    }
}
