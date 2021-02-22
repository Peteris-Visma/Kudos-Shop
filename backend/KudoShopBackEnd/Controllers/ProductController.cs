using BusinessLayer.Models.Input;
using BusinessLayer.Services;
using Microsoft.AspNetCore.Mvc;

namespace KudoShopBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController:ControllerBase
    {
        [HttpPost]
        [Route("AddProduct")]
        public IActionResult AddNewProduct(ProductModel model)
        {
            var handler = new ProductService();
            handler.Add(model);
            return NoContent();
        }

    }
}
