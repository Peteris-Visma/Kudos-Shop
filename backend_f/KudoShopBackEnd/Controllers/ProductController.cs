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



        [HttpDelete]
        [Route("DeleteProducts/{id:int}")]

        public void RemoveProduct(int id)
        {
            var handler = new ProductService();
            handler.Remove(id);
        
        }

        [HttpGet]
        [Route("GetProducts")]

        public IActionResult GetProducts()
        {
            var handler = new ProductService();
            var products = handler.GetAll();
            return Ok(products);
        }
    }
}
