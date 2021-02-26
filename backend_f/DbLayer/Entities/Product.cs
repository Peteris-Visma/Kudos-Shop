using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DbLayer.Entities
{
    public class Product:Entity
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public bool IsAvailable { get; set; }
        public string Picture { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
        public virtual List<Purchase> Purchaseš { get; set; }


    }
}
