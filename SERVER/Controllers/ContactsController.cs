using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/contacts")]
[EnableCors("AllowSpecificOrigin")]

public class ContactsController : Controller
{
    private readonly LibraryContext context;

    public ContactsController(LibraryContext context)
    {
        this.context = context;
    }

    [HttpGet]         // api/v1/books
    public List<Contact> GetAllBooks(int? page, string name, string phone, string firstName, int age, string gender, string sort, string dir, int length = 20)
    {
        IQueryable<Contact> query = context.Contacts;

        //Filter
        if (!string.IsNullOrWhiteSpace(name))
            query = query.Where(d => d.Name == name);
       

        //sort
        if (!string.IsNullOrWhiteSpace(sort))
        {
            switch (sort)
            {
                case "Name":
                    if (dir == "asc")
                        query = query.OrderBy(d => d.Name);
                    else if (dir == "desc")
                        query = query.OrderByDescending(d => d.Name);
                    break;
            }
        }
        //paging
        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
    }

    [Route("{id}")]   // api/v1/contacts/2
    [HttpGet]
    public IActionResult GetContact(int id)
    {
        var contact = context.Contacts.SingleOrDefault(d => d.Id == id);

        if (contact == null)
            return NotFound();

        return Ok(contact);
    }

    [Route("{id}/numbers")]   
    [HttpGet]
    public IActionResult GetNumbersForContact(int id)
    {
        var contact = context.Contacts
                    .Include(d => d.Numbers)
                    .SingleOrDefault(d => d.Id == id);

     
        if (contact == null)
            return NotFound();

        return Ok(contact.Numbers);
    }

    [HttpPost]
    public IActionResult CreateContact([FromBody] Contact newContact)
    {
        //Book toevoegen in de databank, Id wordt dan ook toegekend
        context.Contacts.Add(newContact);
        context.SaveChanges();
        // Stuur een result 201 met het boek als content
        return Created("", newContact);
    }

    [HttpPut]
    public IActionResult UpdateContact([FromBody] Contact updateContact)
    {
        var orgContact = context.Contacts.Find(updateContact.Id);
        if (orgContact == null)
            return NotFound();

        orgContact.Name = updateContact.Name;
        orgContact.FirstName = updateContact.FirstName;
        orgContact.Age = updateContact.Age;
        orgContact.Gender = updateContact.Gender;

        context.SaveChanges();
        return Ok(orgContact);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteContact(int id)
    {
        var contact = context.Contacts.Find(id);
        if (contact == null)
            return NotFound();

        //book verwijderen ..
        context.Contacts.Remove(contact);
        context.SaveChanges();
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }
}