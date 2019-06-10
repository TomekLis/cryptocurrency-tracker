namespace CryptocurrencyTracker.Dtos
{
    public class CreateChartDto
    {
        public int Id { get; set; }
        public string ChartName { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Cryptocurrency { get; set; }
    }
}
