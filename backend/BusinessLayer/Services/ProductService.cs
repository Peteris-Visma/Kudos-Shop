using BusinessLayer.Models.Input;
using DbLayer;

namespace BusinessLayer.Services
{
    public class ProductService
    {
        public void Add(ProductModel model)
        {
            ValidateModel(model);
            using (var db = new KudoContext())
            {
                db.Products.Add(model.ToEntity());
                db.SaveChanges();
            }
        }

        private void ValidateModel(ProductModel model)
        {
            //todo
        }
    }
}
