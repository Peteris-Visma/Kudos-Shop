using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DbLayer.Entities
{
    public class Transfer : Entity
    {
        [Required]
        public int FromUser { get; set; }
        [Required]
        public int ToUSer { get; set; }
        [Required]
        public int TransferAmount { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime DateTime { get; set; }
        [Required]
        public bool Approve { get; set; }
    }
}
