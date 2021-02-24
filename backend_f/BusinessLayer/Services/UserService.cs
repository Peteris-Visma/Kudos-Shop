using BusinessLayer.Models.Output;
using DbLayer;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessLayer.Services
{
    public class UserService
    {
        public int GetUserMoney(int id)
        {
            using var db = new KudoContext();
            var user = db.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
                throw new Exception("User not found");
            return user.Balance;
        }

        public void SendKudos(SendKudosModel model)
        {
            using var db = new KudoContext();
            var sender = db.Users.FirstOrDefault(x => x.Id == model.SenderId);
            if (sender == null)
                throw new Exception("Sender not found");

            if (!sender.IsAdmin && sender.Balance< model.Amount)
                throw new Exception("Sender have no so much money");//todo change error text

            var reciever = db.Users.FirstOrDefault(x => x.Id == model.RecieverId);
            if (reciever == null)
                throw new Exception("Reciever not found");

            if (sender.IsAdmin)
            {
                reciever.Balance += model.Amount;
                db.Update(reciever);
            }
            else
            {
                sender.Balance -= model.Amount;
                reciever.Balance += model.Amount;

                db.Update(sender);
                db.Update(reciever);
            }
            db.SaveChanges();
        }
        public List<UserInfoModel> GetAllUserNamesAndIds()
        {
            using var context = new KudoContext();
            return context.Users.Select(x => new UserInfoModel(x.Id, x.Name, x.Surname)).ToList();
        }
    }
}
