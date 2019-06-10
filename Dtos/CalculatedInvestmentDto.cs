namespace CryptocurrencyTracker.Dtos
{
    public class CalculatedInvestmentDto
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public decimal Value { get; set; }
        public string Cryptocurrency { get; set; }
        public decimal Revenue { get; set; }
        public decimal RevenueFraction { get; set; }
    }
}
