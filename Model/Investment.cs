using System.ComponentModel.DataAnnotations;

namespace CryptocurrencyTracker.Model
{
    public class Investment
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public decimal Value { get; set; }
        public string Cryptocurrency { get; set; }
        public virtual AppUser User { get; set; }
        public string UserId { get; set; }
    }
}
