using DbLayer.Entities;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessLayer.Models.Input
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string NameP { get; set; }
        public int PriceP { get; set; }
        public bool IsAvailableP { get; set; }
        public string PictureP { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }

        public Product ToEntity()
        {
            return new Product
            {
                Id = Id,
                IsAvailable = IsAvailableP,
                Price = PriceP,
                Name = NameP,
                Picture = PictureP
            };
        }
    }
}
