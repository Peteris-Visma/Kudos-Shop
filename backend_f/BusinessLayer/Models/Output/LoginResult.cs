﻿namespace BusinessLayer.Models.Output
{
    public class LoginResult
    {
        public string Token {get;set;}
        public string Username { get;set;}

        public string Usersurname { get; set; }
        public int Balance { get; set; }
    }
}
