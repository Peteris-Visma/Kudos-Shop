using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace KudoShopBackEnd.Models
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<Role> Roles { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>()
               .HasOne(p => p.Role)
               .WithMany(t => t.Users)
               .HasForeignKey(p => p.UserId);

            modelBuilder.Entity<Purchase>()
               .HasOne(p => p.User)
               .WithMany(t => t.Purchases)
               .HasForeignKey(p => p.UserId);


            modelBuilder.Entity<Product>()
            .HasOne(p => p.Purchase)
            .WithMany(t => t.Products)
           .HasForeignKey(p => p.PurchaseId);

        }
    }
}

