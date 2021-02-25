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
    public class PurchaseController
    {
        [Route("api/[controller]")]
        [ApiController]
        [EnableCors("AllowOrigin")]
        public class TransferRequestController : ControllerBase
        {
            [HttpGet]
            [Route("GetPurchases")]

            public IActionResult GetAllPurchases()
            {
                var handler = new PurchaseService();
                var requests = handler.GetAllPurchases();
                return Ok(requests);
            }
            [HttpPost]
            [Route("AddPurchase")]
            public IActionResult AddPurchase(PurchaseInputModel model)
            {
                var handler = new PurchaseService();
                handler.AddPurchase(model);
                return NoContent();
            }
            [HttpDelete]
            [Route("DeletePurchase")]
            public void RemovePurchase(int id)
            {
                var handler = new PurchaseService();
                handler.RemovePurchase(id);

            }
        }
    }
}
