using Microsoft.AspNetCore.Mvc;
using ZoteShopApi.Data;
using ZoteShopApi.Models;

namespace ZoteShopApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewController :ControllerBase
    {
        DataContextDapper _dapper;

        public ReviewController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);
        }

        [HttpGet("GetAllReviews/{productName}")]
        public IEnumerable<Review> GetAllReviews(string productName)
        {
            string query = @"Select * From Reviews Where productName = '"  + productName + "'";
            IEnumerable<Review> reviews = _dapper.LoadData<Review>(query);
            return reviews;
        }

       


        [HttpPost("AddReview")]
        public IActionResult AddReview(Review review)
        {
            string query = @"Insert into Reviews
                            (productName, rating, review, email) 
                            VALUES ( '" 
                            + review.productName + "', '" 
                            + review.rating + "', '" 
                            + review.review + "', '" 
                            + review.email + "')";
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }

            throw new Exception("Unable to add user");
            

        }

        [HttpPut]
        public IActionResult EditReview(Review review)
        {
            string query = @"Update Reviews Set (
                            name = ' " + review.productName +
                            "', email = '" + review.rating +
                            "', password = '" + review.review +
                            "', address = '" + review.email +
                            "' Where reviewId ='" + review.Id + "')";
            if (_dapper.ExecuteSQL(query))
            {
                return Ok();
            }
            throw new Exception("Failed to update user");
        }

    }
}


