using DbLayer.Entities;

namespace BusinessLayer.Models.Input
{
    public class ProductModel
    {
        public string NameP { get; set; }
        public int PriceP { get; set; }
        public bool IsAvailableP { get; set; }
        public string PictureP { get; set; }

        public Product ToEntity()
        {
            return new Product
            {
                IsAvailable = IsAvailableP,
                Price = PriceP,
                Name = NameP,
                Picture = PictureP
            };
        }
    }
}
