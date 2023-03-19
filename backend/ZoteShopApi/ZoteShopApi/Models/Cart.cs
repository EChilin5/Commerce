namespace ZoteShopApi.Models
{
    public class Cart
    {
        public int cartId { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public double amount { get; set; }
        public string imageURL { get; set; }
        public string userName { get; set; }
        public int productId { get; set; }

        public Cart()
        {
            if(name == null)
            {
                name = "";
            }
            if(imageURL == null)
            {
                imageURL = "";
            }
            if(userName == null)
            {
                userName = "";
            }
            
        }

    }
}
