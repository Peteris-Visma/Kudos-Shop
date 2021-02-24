using DbLayer.Entities;
using Microsoft.EntityFrameworkCore;

namespace DbLayer
{
    public class KudoContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<Transfer> Transfers { get; set; }



        public KudoContext()
        {
            Database.Migrate();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=LV-LAS-SC-0078;Database=VismaKudos;Trusted_Connection=True;");
        }
    }
}
