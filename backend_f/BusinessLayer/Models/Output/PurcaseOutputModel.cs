using System;
using System.Collections.Generic;
using System.Text;
using DbLayer.Entities;

namespace BusinessLayer.Models.Output
{
    public class PurcaseOutputModel
    {
        public PurcaseOutputModel(int Id, bool IsApproved, DateTime RequestDate, int UserId, User User, int ProductId, Product Product)
        {
            Id = IdP;
            IsApproved = IsApprovedP;
            RequestDate = RequestDateP;
            UserId = UserIdP;
            ProductId = ProductIdP;
            Product = ProductP;
            User = UserP;
        }
        public int IdP { get; set; }
        public bool IsApprovedP { get; set; }
        public DateTime RequestDateP { get; set; }
        public int UserIdP { get; set; }
        public User UserP { get; set; }
        public int ProductIdP { get; set; }
        public Product ProductP { get; set; }
    }
}
