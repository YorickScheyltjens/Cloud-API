using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/numbers")]
[EnableCors("AllowSpecificOrigin")]

public class NumbersController : Controller
{
    private readonly LibraryContext context;

    public NumbersController(LibraryContext context)
    {
        this.context = context;
    }

    [HttpGet]         // api/v1/books
    public List<Number> GetAllNumbers(int? page, string name, string phone, string firstName, int age, string gender, string sort, string dir, int length = 2)
    {
        IQueryable<Number> query = context.Numbers;

       

        if (page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.ToList();
    }

    [Route("{id}")]   // api/v1/contacts/2
    [HttpGet]
    public IActionResult GetNumber(int id)
    {
        var number = context.Numbers.SingleOrDefault(d => d.Id == id);

        if (number == null)
            return NotFound();

        return Ok(number);
    }

    // [Route("{id}/numbers")]   
    // [HttpGet]
    // public IActionResult GetNumbersForContact(int id)
    // {
    //     var contact = context.Contacts
    //                 .Include(d => d.Numbers)
    //                 .SingleOrDefault(d => d.Id == id);

     
    //     if (contact == null)
    //         return NotFound();

    //     return Ok(contact.Numbers);
    // }

    [HttpPost]
    public IActionResult CreateNumber([FromBody] Number newNumber)
    {
        //Book toevoegen in de databank, Id wordt dan ook toegekend
        context.Numbers.Add(newNumber);
        context.SaveChanges();
        // Stuur een result 201 met het boek als content
        return Created("", newNumber);
    }

    [HttpPut]
    public IActionResult UpdateBook([FromBody] Number updateNumber)
    {
        var orgNumber = context.Numbers.Find(updateNumber.Id);
        if (orgNumber == null)
            return NotFound();

        orgNumber.Num = updateNumber.Num;
        orgNumber.Description = updateNumber.Description;

        context.SaveChanges();
        return Ok(orgNumber);
    }

    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteNumber(int id)
    {
        var number = context.Numbers.Find(id);
        if (number == null)
            return NotFound();

        //book verwijderen ..
        context.Numbers.Remove(number);
        context.SaveChanges();
        //Standaard response 204 bij een gelukte delete
        return NoContent();
    }
}