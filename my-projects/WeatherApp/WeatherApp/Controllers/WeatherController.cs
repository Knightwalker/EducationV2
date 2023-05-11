using Microsoft.AspNetCore.Mvc;
using WeatherApp.Models.Weather;
using WeatherApp.Interfaces;

namespace WeatherApp.Controllers
{
    public class WeatherController : Controller
    {
        private readonly IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            this._weatherService = weatherService;
        }

        [Route("/")]
        public IActionResult Index()
        {
            var citiesList = this._weatherService.GetWeatherDetails();
            return View(citiesList);
        }

        [Route("/weather/{cityCode?}")]
        public IActionResult City(string? cityCode)
        {
            if (string.IsNullOrEmpty(cityCode))
            {
                return View();
            }

            CityWeatherModel? city = this._weatherService.GetWeatherByCityCode(cityCode);

            return View(city);
        }
    }
}
