using Microsoft.AspNetCore.Mvc;
using ZoteShopApi.Data;
using ZoteShopApi.Models;

namespace ZoteShopApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController :ControllerBase
    {
        DataContextDapper _dapper;

        public CartController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);
        }

       

        [HttpGet("GetAllCartItem/{userName}")]
        public IEnumerable<Cart> GetAllUserItems(string userName)
        {
          
            string query = @"Select * From Cart Where userName = '" + userName + "'";
            IEnumerable<Cart> cart = _dapper.LoadData<Cart>(query);
            return cart;
        }


        [HttpPost("AddCartItem")]
        public IActionResult AddUser(Cart cart)
        {
            //int index = cart.userName.LastIndexOf("@");
            //if (index >= 0)
            //    cart.userName = cart.userName.Substring(0, index);

            string query = @"Insert into Cart
                            (name, 
                            price, 
                            amount, 
                            imageURL, 
                            userName, 
                            productId) 
                            VALUES ( '" + cart.name + "','" 
                            + cart.price + "','" 
                            + cart.amount + "','" 
                            + cart.imageURL + "','" 
                            + cart.userName + "','" 
                            + cart.productId + "')";

            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }

            throw new Exception("Unable to add to cart");
        }

        [HttpDelete("DeleteCartItem/{userName}")]
        public IActionResult DeleteCartItem(string userName)
        {
            string sql = @"Delete From Cart Where name = '" + userName +"'";

            if (_dapper.ExecuteSQL(sql))
            {
                return Ok();
            }
            throw new Exception("Failed to delete user");
        }
       

    }
}


