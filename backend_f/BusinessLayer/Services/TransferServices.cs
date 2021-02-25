using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BusinessLayer.Models.Input;
using BusinessLayer.Models.Output;
using DbLayer;

namespace BusinessLayer.Services
{
    public class TransferServices
    {
        private void ValidateModel(TransferInputModel model)
        {
            if (model == null)
                throw new Exception("Data not found");
            if (model.TransferAmountT < 0)
                throw new Exception("Can't transfer negative amount!");
        }
        public List<TransferOutputModel> GetAllTrasfers()
        {
            using var context = new KudoContext();
            return context.Transfers.Select(x => new TransferOutputModel(x.Id, x.FromUser, x.ToUSer, x.TransferAmount, x.Description, x.DateTime, x.Approve)).ToList();
        }
        public void AddRequest(TransferInputModel model)
        {
            ValidateModel(model);
            using var db = new KudoContext();
            db.Transfers.Add(model.ToEntity());
            db.SaveChanges();//save changes to db
        }
        public void RemoveRequest(int id)
        {
            using var context = new KudoContext();
            var entity = context.Transfers.FirstOrDefault(x => x.Id == id);
            if (entity == null)
                throw new Exception("Request not found");
            context.Transfers.Remove(entity);
            context.SaveChanges();//save changes to db
        }
    }
}
