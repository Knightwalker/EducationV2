using Microsoft.AspNetCore.Mvc;
using WeatherApp.Models.Weather;

namespace WeatherApp.Controllers
{
    public class WeatherController : Controller
    {
        private List<CityWeatherModel> citiesList = new List<CityWeatherModel>()
        {
            new CityWeatherModel()
            {
                CityUniqueCode = "LDN",
                CityName = "London",
                DateAndTime = Convert.ToDateTime("2030-01-01 8:00"),
                TemperatureFahrenheit = 33
            },
            new CityWeatherModel()
            {
                CityUniqueCode = "NYC",
                CityName = "New York",
                DateAndTime = Convert.ToDateTime("2030-01-01 3:00"),
                TemperatureFahrenheit = 60
            },
            new CityWeatherModel()
            {
                CityUniqueCode = "PAR",
                CityName = "Paris",
                DateAndTime = Convert.ToDateTime("2030-01-01 9:00"),
                TemperatureFahrenheit = 82
            }
        };

        [Route("/")]
        public IActionResult Index()
        {
            return View(citiesList);
        }
    }
}
