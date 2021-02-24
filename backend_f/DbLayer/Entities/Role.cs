using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DbLayer.Entities
{
    public class Role:Entity
    {
        [Required]
        public string Name { get; set; }
        public virtual List<User> Users { get; set; }
    }
}
