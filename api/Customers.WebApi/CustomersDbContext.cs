using CustomerDatabase.Shared;

using Microsoft.EntityFrameworkCore;

namespace Customers.WebApi
{
    public class CustomersDbContext : DbContext
    {
        public DbSet<PhoneNumber> PhoneNumbers { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Customer> Customers { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.;Initial Catalog=CustomerDatabase;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
		{
            builder.Entity<Customer>(entity => entity.Ignore(p => p.ObjectState));
            builder.Entity<PhoneNumber>(entity => entity.Ignore(p => p.ObjectState));
            builder.Entity<Address>(entity => entity.Ignore(p => p.ObjectState));
        }
    }
}
