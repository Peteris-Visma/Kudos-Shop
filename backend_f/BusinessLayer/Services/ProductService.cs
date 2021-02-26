using BusinessLayer.Models.Input;
using BusinessLayer.Models.Output;
using DbLayer;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLayer.Services
{
    public class ProductService
    {
        public void Add(ProductModel model)
        {
            ValidateModel(model);
            using var db = new KudoContext();
            db.Products.Add(model.ToEntity());
            db.SaveChanges();//save changes to db
        }

        public void Remove(int id) {
            using var context = new KudoContext();
            var entity = context.Products.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception("Product not found");
            context.Products.Remove(entity);
            context.SaveChanges();//save changes to db
        }

        private void ValidateModel(ProductModel model)
        {
            if (model == null)
                throw new Exception("Data not found");
            if (string.IsNullOrEmpty(model.NameP) || model.NameP.Length > 50)
                throw new Exception("Name is not correct");
            if (model.PriceP < 0)
                throw new Exception("Price can not be less than zero");
        }

        public List<ShopProductModel> GetAll()
        {
            using var context = new KudoContext();
            return context.Products.Select(x => new ShopProductModel(x.Id, x.Name, x.Price, x.IsAvailable, x.Picture, x.ImageSrc)).ToList();
            
        }
    }
}
