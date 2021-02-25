using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using BusinessLayer.Models.Input;
using BusinessLayer.Services;

namespace KudoShopBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class TransferRequestController : ControllerBase
    {
        [HttpGet]
        [Route("GetRequests")]

        public IActionResult GetRequests()
        {
            var handler = new TransferServices();
            var requests = handler.GetAllTrasfers();
            return Ok(requests);
        }
        [HttpPost]
        [Route("AddRequest")]
        public IActionResult AddNewRequest(TransferInputModel model)
        {
            var handler = new TransferServices();
            handler.AddRequest(model);
            return NoContent();
        }
        [HttpDelete]
        [Route("DeleteRequest")]
        public void RemoveRequest(int id)
        {
            var handler = new TransferServices();
            handler.RemoveRequest(id);

        }
    }
}
