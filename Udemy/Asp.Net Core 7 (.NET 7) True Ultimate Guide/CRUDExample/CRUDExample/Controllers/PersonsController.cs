using Microsoft.AspNetCore.Mvc;
using ServiceContracts;
using ServiceContracts.DTO;

namespace CRUDExample.Controllers
{
    public class PersonsController : Controller
    {
        //private fields
        private readonly IPersonsService _personsService;

        //constructor
        public PersonsController(IPersonsService personsService)
        {
            this._personsService = personsService;
        }

        [Route("/")]
        [Route("/persons/index")]
        public IActionResult Index()
        {
            List<PersonResponse> persons = this._personsService.GetAllPersons();

            return View(persons);
        }
    }
}
