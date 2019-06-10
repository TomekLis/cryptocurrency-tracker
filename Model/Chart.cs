using System.ComponentModel.DataAnnotations;

namespace CryptocurrencyTracker.Model
{
    public class Chart
    {
        [Key]
        public int Id { get; set; }
        public string ChartName { get; set; }
        public string StartingDate { get; set; }
        public string EndingDate { get; set; }
        public string Cryptocurrency { get; set; }
        public virtual AppUser User { get; set; }
        public string UserId { get; set; }
    }
}
