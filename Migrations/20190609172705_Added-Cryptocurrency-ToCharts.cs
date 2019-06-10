using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptocurrencyTracker.Migrations
{
    public partial class AddedCryptocurrencyToCharts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cryptocurrency",
                table: "Charts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cryptocurrency",
                table: "Charts");
        }
    }
}
