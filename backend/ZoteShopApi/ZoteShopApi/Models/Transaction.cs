namespace ZoteShopApi.Models
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public string ProductName { get; set; }
        public string imageUrl { get; set; }
        public float price { get; set; }
        public string purchaserName { get; set; }
        public string dateSold { get; set; }
        public int productId { get; set; }
    }
}
