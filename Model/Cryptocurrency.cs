using System.ComponentModel.DataAnnotations;

namespace CryptocurrencyTracker.Model
{
    public class Cryptocurrency
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}