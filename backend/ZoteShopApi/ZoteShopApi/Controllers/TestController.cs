using Microsoft.AspNetCore.Mvc;
using ZoteShopApi.Data;
using ZoteShopApi.Models;

namespace ZoteShopApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController :ControllerBase
    {
        DataContextDapper _dapper;

        public TestController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);
        }


        [HttpGet("Test")]
        public string TestConnection()
        {
            return "test is successful";
        }

        [HttpGet("Connection")]
        public DateTime ConnectionTest()
        {
            return _dapper.LoadDataSingle<DateTime>("Select GETDATE()");
        }





    }
}


