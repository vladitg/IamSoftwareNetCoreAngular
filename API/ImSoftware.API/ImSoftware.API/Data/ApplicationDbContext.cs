using ImSoftware.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace ImSoftware.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
