using Microsoft.AspNetCore.Mvc;
using ZoteShopApi.Data;
using ZoteShopApi.Models;

namespace ZoteShopApi.Controllers
{
    public class ProductController : Controller
    {

        DataContextDapper _dapper;

        public ProductController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);

        }

        [HttpGet("GetAllProduct")]
        public IEnumerable<Product> getAllProduct()
        {
            string query = "SELECT * FROM Products";

            IEnumerable<Product> products = _dapper.LoadData<Product>(query);
            return products;

        }

        [HttpPut("GetSingleProduct/{ProductId}")]
        public Product GetProduct(int ProductId)
        {
            string query = "Select * From Products where productsId = " + ProductId.ToString();
            Product product = _dapper.LoadDataSingle<Product>(query);
            return product;
        }

        [HttpPost("AddProduct")]
        public IActionResult addProduct(Product product)
        {
            Console.WriteLine(product);
            string query = @"Insert into Products (
                            productName, productImage, productPrice, size, quantity)
                            values 
                                (' "
                                   + product.productName + "', '"
                            + product.productImage + "', '"
                            + product.productPrice + "', '"
                            + product.size + "', '"
                            + product.quantity + "' )";
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }
            throw new Exception("Exception to add product");
        }

        [HttpPut("EditUser")]
        public IActionResult EditUser(Product product)
        {
            string query = @"Update Users Set 
                            productName = ' " + product.productName +
                           "', productImage = '" + product.productImage +
                           "', productPrice = '" + product.productPrice +
                           "', size = '" + product.size +
                           "', quantity = '" + product.quantity +
                          "' Where productsId =" + product.productsId;
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }
            throw new Exception("Exception to edit product");
        }


    }
}
