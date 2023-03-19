using Microsoft.AspNetCore.Mvc;
using ZoteShopApi.Data;
using ZoteShopApi.Models;

namespace ZoteShopApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController :ControllerBase
    {
        DataContextDapper _dapper;

        public TransactionController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);
        }

        [HttpGet("GetAllTransactions")]
        public IEnumerable<Transaction> TestConnection()
        {
            string query = @"Select * From Transactions";
            IEnumerable<Transaction> purchases = _dapper.LoadData<Transaction>(query);

            return purchases;
        }

        [HttpGet("GetUserTransaction/{name}")]
        public IEnumerable<Transaction> GetSingleUser(string name)
        {
            string query = @"Select * From Transactions Where purchaserName = '" + name+"'";
            IEnumerable<Transaction> transaction = _dapper.LoadData<Transaction>(query);
            return transaction;
        }


        [HttpPost("AddTransaction")]
        public IActionResult AddUser(Transaction transaction)
        {
            string query = @"Insert into Transactions
                            (ProductName, 
                            imageUrl, 
                            price, 
                            purchaserName, 
                            dateSold, 
                            productId) 
                            VALUES
                            ( '" + transaction.ProductName + "','"
                            + transaction.imageUrl + "','" +
                            transaction.price + "','" +
                            transaction.purchaserName + "','" +
                            transaction.dateSold + "','"+
                            transaction.productId + "')";
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }

            throw new Exception("Unable to add user");
            

        }

  

    }
}


//[HttpGet("GetAllUser")]
//public IEnumerable<Product> getAllProduct()
//{
//    string query = "SELECT * FROM Products";

//    IEnumerable<Product> products = _dapper.LoadData<Product>(query);
//    return products;

//}

//[HttpGet("GetSingleProduct/{ProductId}")]
//public Product GetProduct(int ProductId)
//{
//    string query = "Select * From Products where productsId = " + id.ToString();
//    Product product = _dapper.LoadDataSingle<Product>(query);
//    return product;
//}