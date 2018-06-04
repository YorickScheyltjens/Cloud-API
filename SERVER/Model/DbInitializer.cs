
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            
            
            if(!context.Contacts.Any())
            {
               
                var yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };
                 context.Contacts.Add(yorick);
                yorick  = new Contact()
                {
                    Name = "Scheyltjens",
                    FirstName = "Yorick",
                    Age = 19,
                    Gender = "Male",                    
                };

                context.Contacts.Add(yorick);
                var liesbeth = new Contact()
                {
                    Name = "Vermeiren",
                    FirstName = "Liesbeth",
                    Age = 18,
                    Gender = "Female",
                };
                context.Contacts.Add(liesbeth);

                var phone = new Number()
                {
                    Num = 0470521514,
                    Description = "Phone",
                    Contact = yorick
                };
                context.Numbers.Add(phone);
                var home = new Number()
                {
                    Num = 033142157,
                    Description = "Home",
                    Contact = yorick
                };
                context.Numbers.Add(home);
            }
            
            //Are there already books present ?
            if (!context.Books.Any())
            {
                var suzanne = new Author()
                {
                    Name = "Collins",
                    FirstName = "Suzanne"
                };
                context.Authors.Add(suzanne);
                var george = new Author()
                {
                    Name = "Orwell",
                    FirstName = "George"
                };
                context.Authors.Add(george);

                //Create new book
                var bk = new Book()
                {
                    Title = "The Hunger Games",
                    ISBN = "0439023483",
                    Pages = 374,
                    Genre = "Adventure",
                    Author = suzanne
                };
                //Add the book to the collection of books
                context.Books.Add(bk);
                bk = new Book()
                {
                    Title = "Animal Farm",
                    ISBN = "0452284244",
                    Pages = 122,
                    Genre = "Mystery",
                    Author = suzanne
                };
                context.Books.Add(bk);
                //Save all the changes to the DB
                context.SaveChanges();
            }
        }
    }
}


                

                