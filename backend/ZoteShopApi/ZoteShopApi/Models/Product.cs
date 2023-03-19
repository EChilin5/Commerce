namespace ZoteShopApi.Models
{
    public class Product
    {

        public int productsId { get; set; }
        public string productName { get; set; }  
        public string productImage { get; set; }
        public int productPrice { get; set; }
        public int size { get; set; }
        public int quantity { get; set; }


        public Product()
        {
            if(productName == null)
            {
                productName = "";
            }
            if(productImage == null)
            {
                productImage = "";
            }
        }
    }
}
