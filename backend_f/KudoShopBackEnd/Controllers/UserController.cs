using BusinessLayer.Models.Input;
using BusinessLayer.Models.Output;
using BusinessLayer.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace KudoShopBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Route("GetMyKudos/{id:int}")]
        public IActionResult GetMyKudos(int id)//todo talk about parameter - better using login or token
        {
            var handler = new UserService();
            var balance = handler.GetUserMoney(id);
            return Ok(balance);
        }

        [HttpPost]
        [Route("SendKudos")]
        public IActionResult SendKudos(SendKudosModel model)
        {
            var handler = new UserService();
            handler.SendKudos(model);
            return NoContent();
        }
        [HttpGet]
        [Route("GetUsers")]

        public IActionResult GetUsers()
        {
            var handler = new UserService();
            var users = handler.GetAllUserNamesAndIds();
            return Ok(users);
        }

        [HttpPost]
        [Route("Login")]

        public IActionResult Login([FromBody]LoginModel model)
        {
            var handler = new UserService();
            var users = handler.Login(model);
            return Ok(users);
        }

    }
}
