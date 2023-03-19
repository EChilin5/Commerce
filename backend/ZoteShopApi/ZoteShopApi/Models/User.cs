namespace ZoteShopApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string City { get; set; }    
        public string CardInfo { get; set; }

        public User()
        {
            if(Name == null)
            {
                Name = "";
            }
            if(Email == null)
            {
                Email = "";
            }
            if(Address == null)
            {
                Address = "";
            }
            if (City == null)
            {
                City = "";
            }
            if(CardInfo == null)
            {
                CardInfo = "";
            }
        }
    }
}
