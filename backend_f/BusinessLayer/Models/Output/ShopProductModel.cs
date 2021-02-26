using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessLayer.Models.Output
{
    public class ShopProductModel
    {

        public ShopProductModel(int id, string name, int price, bool isAvailable, string picture, string imagesrc)
        {
            IdP = id;
            NameP = name;
            PriceP = price;
            IsAvailableP = isAvailable;
            PictureP = picture;
            ImageSrc = imagesrc;
        }

        public int IdP { get; set; }
        public string NameP { get; set; }
        public int PriceP { get; set; }
        public bool IsAvailableP { get; set; }
        public string PictureP { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
