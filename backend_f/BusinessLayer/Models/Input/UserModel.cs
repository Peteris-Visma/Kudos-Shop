using System;
using System.Collections.Generic;
using System.Text;
using DbLayer.Entities;

namespace BusinessLayer.Models.Input
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; }     
        public string Surname { get; set; }       
        public string Email { get; set; }
        public int RoleId { get; set; }
        public int Balance { get; set; }
        public bool IsAdmin { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        
        public User ToEntity()
        {
            return new User
            {
                Id = Id,
                Name = Name,
                Surname = Surname,
                Email = Email,
                RoleId = RoleId,
                Balance = Balance,
                IsAdmin = IsAdmin,
                Password = Password,
                Token = Token
            };
        }
    }
}
