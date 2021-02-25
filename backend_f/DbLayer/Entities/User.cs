using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DbLayer.Entities
{
    public class User:Entity
    {
        [Required]
        [MaxLength(30)]
        public string Name { get; set; }
        [Required]
        [MaxLength(30)]
        public string Surname { get; set; }
        [Required]
        [MaxLength(40)]
        public string Email { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }
        [Required]
        public int Balance { get; set; }
        [Required]
        public bool IsAdmin { get; set; }
        [Required]
        public string Password { get; set; }
        //public string BalanceChangesLastTenTimes { get; set; }
        public string Token { get; set; }//for JWT token (Google) 
        public virtual List<Purchase> Purchaseš { get; set; }

    }
}
