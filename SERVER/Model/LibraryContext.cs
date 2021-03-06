
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class LibraryContext : DbContext
    {
        public LibraryContext (DbContextOptions<LibraryContext> options): base(options)
        {
    
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Number> Numbers { get; set; }
    }
}

