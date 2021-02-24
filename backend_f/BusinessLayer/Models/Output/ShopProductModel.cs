namespace BusinessLayer.Models.Output
{
    public class ShopProductModel
    {
        public ShopProductModel(int id, string name, int price, bool isAvailable, string picture)
        {
            IdP = id;
            NameP = name;
            PriceP = price;
            IsAvailableP = isAvailable;
            PictureP = picture;
        }

        public int IdP { get; set; }
        public string NameP { get; set; }
        public int PriceP { get; set; }
        public bool IsAvailableP { get; set; }
        public string PictureP { get; set; }
    }
}
