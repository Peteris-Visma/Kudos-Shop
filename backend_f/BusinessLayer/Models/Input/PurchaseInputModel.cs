using System;
using System.Collections.Generic;
using System.Text;
using DbLayer.Entities;

namespace BusinessLayer.Models.Input
{
    public class PurchaseInputModel
    {
            public int Id { get; set; }
            public bool IsApprovedP { get; set; }
            public DateTime RequestDateP { get; set; }
            public int UserIdP { get; set; }
            public User UserP { get; set; }
            public int ProductIdP { get; set; }
            public Product ProductP { get; set; }
            public Purchase ToEntity()
            {
                return new Purchase
                {
                    Id = Id,
                    IsApproved = IsApprovedP,
                    RequestDate = RequestDateP,
                    UserId = UserIdP,
                    ProductId = ProductIdP,
                    Product = ProductP,
                };
            }
    }
}
