using DbLayer.Entities;

namespace BusinessLayer.Models.Output
{
    public class UserBalanceInfoModel
    {
        public UserBalanceInfoModel(User user)
        {
            Name = user.Name + " " + user.Surname;
            Email = user.Email;
            Balance = user.Balance;
        }

        public string Name { get; set; }
        public string Email { get; set; }
        public int Balance { get; set; }

    }
}
