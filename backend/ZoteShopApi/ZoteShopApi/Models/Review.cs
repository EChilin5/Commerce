namespace ZoteShopApi.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string productName {get; set; }
        public int rating { get; set; }
        public string review { get; set; }
        public string email { get; set; }

        public Review()
        {
            if(productName == null)
            {
                productName = "";
            }
            if (review == null)
            {
                review = "";
            }
            if(email == null)
            {
                email = "";
            }
        }
    }
}
