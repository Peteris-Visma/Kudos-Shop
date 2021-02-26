using BusinessLayer.Models.Input;
using BusinessLayer.Services;
using DbLayer;
using DbLayer.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace KudoShopBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class ProductController:ControllerBase
    {
        private readonly KudoContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;
        public ProductController(KudoContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }
        [HttpPost]
        [Route("AddProduct")]
        public async Task<IActionResult> AddNewProductAsync([FromForm] ProductModel model)
        {
            model.PictureP = await SaveImage(model.ImageFile);
            var handler = new ProductService();
            handler.Add(model);
            return NoContent();
        }


        [HttpDelete]
        [Route("DeleteProducts")]
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

        [HttpGet]
        [Route("GetProductList")]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProduct()
        {
            return await _context.Products
                .Select(x => new Product()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Price = x.Price,
                    IsAvailable = x.IsAvailable,
                    Picture = x.Picture,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Picture)
                }).ToListAsync();
        }
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new string(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
    }
}
