using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        [JsonIgnore]
        public ICollection<Number> Numbers { get; set; }
    } 
}