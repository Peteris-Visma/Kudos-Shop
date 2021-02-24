using System;

namespace DbLayer.Entities
{
    public class Purchase:Entity
    {
        public bool IsApproved { get; set; }
        public DateTime RequestDate { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
