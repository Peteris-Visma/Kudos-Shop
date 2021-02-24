using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Models.Output
{
    public class UserInfoModel
    {
        public UserInfoModel(int Id, string Name, string Surname)
        {
            IdU = Id;
            NameU = Name;
            SurnameU = Surname;
        }
        public int IdU { get; set; }
        public string NameU { get; set; }
        public string SurnameU { get; set; }        
    }
}
