using BusinessLayer.Models.Input;
using BusinessLayer.Models.Output;
using DbLayer;
using DbLayer.Entities;
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

        public LoginResult Login(LoginModel model)
        {
            if (model == null || string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
                throw new Exception("Incorrect data");
            model.Email = model.Email.Trim();
            model.Password = model.Password.Trim();
            using var db = new KudoContext();
            var user = db.Users.FirstOrDefault(x => x.Password == model.Password && x.Email == model.Email);
            if(user==null)
                throw new Exception("Incorrect login or password");
            var result = new LoginResult();
            result.Token = UpdateToken(user, db);//temperary
            result.Username = user.Name;//temperary
            result.Usersurname = user.Surname;//temperary
            result.Balance = user.Balance;//temperary
            return result;
        }

        private string UpdateToken(User user, KudoContext db)
        {
            var rand = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";//characters which we can use to generate random string
            user.Token = new string(Enumerable.Repeat(chars, 21)//21 - length
              .Select(s => s[rand.Next(s.Length)]).ToArray());//murgs no interneta.

            db.Users.Update(user);
            db.SaveChanges();
            return user.Token;
        }

        public List<UserInfoModel> GetAllUserNamesAndIds()
        {
            using var context = new KudoContext();
            return context.Users.Select(x => new UserInfoModel(x.Id, x.Name, x.Surname)).ToList();
        }
    }
}
