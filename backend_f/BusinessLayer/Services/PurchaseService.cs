using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BusinessLayer.Models.Input;
using BusinessLayer.Models.Output;
using DbLayer;

namespace BusinessLayer.Services
{
    public class PurchaseService
    {
        public List<PurcaseOutputModel> GetAllPurchases()
        {
            using var context = new KudoContext();
            return context.Purchases.Select(x => new PurcaseOutputModel(x.Id, x.IsApproved, x.RequestDate, x.UserId, x.User, x.ProductId, x.Product)).ToList();
        }
        public void AddPurchase(PurchaseInputModel model)
        {
            using var db = new KudoContext();
            db.Purchases.Add(model.ToEntity());
            db.SaveChanges();//save changes to db
        }
        public void RemovePurchase(int id)
        {
            using var context = new KudoContext();
            var entity = context.Purchases.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception("Purchase not found");
            context.Purchases.Remove(entity);
            context.SaveChanges();//save changes to db
        }
    }
}
