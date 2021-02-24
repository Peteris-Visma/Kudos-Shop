using DbLayer.Entities;

namespace BusinessLayer.Models.Input
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string NameP { get; set; }
        public int PriceP { get; set; }
        public bool IsAvailableP { get; set; }
        public string PictureP { get; set; }

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
