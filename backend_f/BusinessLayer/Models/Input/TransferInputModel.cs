using System;
using System.Collections.Generic;
using System.Text;
using DbLayer.Entities;

namespace BusinessLayer.Models.Input
{
    public class TransferInputModel
    {
        public int Id { get; set; }
        public int FromUserT { get; set; }
        public int ToUSerT { get; set; }
        public int TransferAmountT { get; set; }
        public string DescriptionT { get; set; }
        public DateTime DateTimeT { get; set; }
        public bool ApproveT { get; set; }
        public Transfer ToEntity()
        {
            return new Transfer
            {
                Id = Id,
                FromUser = FromUserT,
                ToUSer = ToUSerT,
                TransferAmount = TransferAmountT,
                Description = DescriptionT,
                DateTime = DateTimeT,
                Approve = ApproveT
            };
        }
    }
}
