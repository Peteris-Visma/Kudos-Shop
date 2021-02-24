using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KudoShopBackEnd.Models
{
    public class Purchase
    {
        [Key]
        public int PurchaseId { get; set; }
        public bool IsApproved { get; set; }
        public DateTime RequestDate { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ProductId { get; set; }
        public List<Product> Products { get; set; }
    }
}
