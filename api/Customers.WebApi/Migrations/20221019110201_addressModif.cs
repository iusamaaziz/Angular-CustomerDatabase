using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Customers.WebApi.Migrations
{
    public partial class addressModif : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AddressType",
                table: "Addresses",
                type: "nvarchar(10)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddressType",
                table: "Addresses");
        }
    }
}
