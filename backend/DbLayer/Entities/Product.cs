using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DbLayer.Entities
{
    public class Product:Entity
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        public int Price { get; set; }
        public bool IsAvailable { get; set; }
        public string Picture { get; set; }
        public virtual List<Purchase> Purchaseš { get; set; }


    }
}
