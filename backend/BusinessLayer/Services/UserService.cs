using DbLayer;
using System;
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

        public void SendKudos(int senderId, int recieverId, int amount)
        {
            using var db = new KudoContext();
            var sender = db.Users.FirstOrDefault(x => x.Id == senderId);
            if (sender == null)
                throw new Exception("Sender not found");

            if (!sender.IsAdmin && sender.Balance< amount)
                throw new Exception("Sender have no so much money");//todo change error text

            var reciever = db.Users.FirstOrDefault(x => x.Id == recieverId);
            if (reciever == null)
                throw new Exception("Reciever not found");

            if (sender.IsAdmin)
            {
                reciever.Balance += amount;
                db.Update(reciever);
            }
            else
            {
                sender.Balance -= amount;
                reciever.Balance += amount;

                db.Update(sender);
                db.Update(reciever);
            }
            db.SaveChanges();
        }
    }
}
