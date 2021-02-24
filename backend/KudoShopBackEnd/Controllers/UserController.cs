using BusinessLayer.Services;
using Microsoft.AspNetCore.Mvc;

namespace KudoShopBackEnd.Controllers
{
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("GetMyKudos")]
        public IActionResult GetMyKudos(int id)//todo talk about parameter - better using login or token
        {
            var handler = new UserService();
            var balance = handler.GetUserMoney(id);
            return Ok(balance);
        }

        [HttpPost]
        [Route("SendKudos")]
        public IActionResult SendKudos(int senderId, int recieverId, int amount)//Admin to Employee      and      Employee to employee
        {
            var handler = new UserService();
            handler.SendKudos(senderId, recieverId, amount);
            return NoContent();
        }
    }
}
