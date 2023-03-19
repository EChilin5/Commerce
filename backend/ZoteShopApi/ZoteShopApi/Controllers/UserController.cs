using Microsoft.AspNetCore.Mvc;
using ZoteShopApi.Data;
using ZoteShopApi.Models;

namespace ZoteShopApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController :ControllerBase
    {
        DataContextDapper _dapper;

        public UserController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);
        }

        [HttpGet("GetAllUser")]
        public IEnumerable<User> TestConnection()
        {
            string query = @"Select * From Users";
            IEnumerable<User> users = _dapper.LoadData<User>(query);

            return users;
        }

        [HttpGet("GetAllUser/{email}/{password}")]
        public User GetSingleUser(string email, string password)
        {
            string query = @"Select * From Users Where email = '" + email + "'";
            User user = _dapper.LoadDataSingle<User>(query);
            return user;
        }


        [HttpPost("AddUser")]
        public IActionResult AddUser(User user)
        {
            string query = @"Insert into Users
                            (name, 
                            email, 
                            password, 
                            address, 
                            cityState, 
                            cardInfo) 
                            VALUES ( '" + user.Name + "', '"
                            + user.Email + "', '" 
                            + user.Password + "', '" 
                            + user.Address + "', '" 
                            +user.City + "','"
                            + user.CardInfo + "')";
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }

            throw new Exception("Unable to add user");
            

        }

        [HttpPut]
        public IActionResult EditUser(User user)
        {
            string query = @"Update Users Set 
                            name = ' " + user.Name +
                            "', email = '" + user.Email +
                            "', password = '" + user.Password +
                            "', address = '" + user.Address +
                            "', city = '" + user.City +
                            "', cardInfo = '" + user.CardInfo +
                            "' Where userId =" + user.Id;
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }
            throw new Exception("Failed to update user");
        }

    }
}


