using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KudoShopBackEnd.Models
{
    public class Role
    {
        [Required]
        public int RoleId { get; set;  }
        public string Name { get; set; }     
        public virtual List<User> Users { get; set; }
    }
}
