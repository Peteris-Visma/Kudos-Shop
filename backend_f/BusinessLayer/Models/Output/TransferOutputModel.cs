using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Models.Output
{
    public class TransferOutputModel
    {
        public TransferOutputModel(int Id, int FromUser, int ToUSer,int TransferAmount, string Description, DateTime DateTime, bool Approve)
        {
            IdP = Id;
            FromUser = FromUserT;
            ToUSer = ToUSerT;
            TransferAmount = TransferAmountT;
            Description = DescriptionT;
            DateTime = DateTimeT;
            Approve = ApproveT;
        }

        public int IdP { get; set; }
        public int FromUserT { get; set; }
        public int ToUSerT { get; set; }
        public int TransferAmountT { get; set; }
        public string DescriptionT { get; set; }
        public DateTime DateTimeT { get; set; }
        public bool ApproveT { get; set; }
    }
}
