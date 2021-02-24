using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KudoShopBackEnd.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public bool IsAvailable { get; set; }
        public string Picture { get; set; }
        
        public int PurchaseId { get; set; }
        public Purchase Purchase { get; set;  }
    }
}
