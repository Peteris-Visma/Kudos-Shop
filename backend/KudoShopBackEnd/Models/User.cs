using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KudoShopBackEnd.Models
{
    public class User
    {
       
        [Key]
        public int UserId { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [MaxLength(50)]
        public string Surname { get; set; }
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [Required]
        public int RoleId { get; set; }
        public Role Role { get; set; }
        [Required]
        public int Balance { get; set; }
        [Required]
        public virtual List<Purchase> Purchases { get; set; }
    }
}
