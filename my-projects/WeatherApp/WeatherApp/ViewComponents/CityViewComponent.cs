using Microsoft.AspNetCore.Mvc;
using WeatherApp.Models.Weather;

namespace WeatherApp.ViewComponents
{
    public class CityViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(CityWeatherModel city)
        {
            this.ViewBag.CityClassName = GetCssClassByFahrenheit(city.TemperatureFahrenheit);
            return View(city); //invokes view of the view component at Views/Shared/Components/Grid/Sample.cshtml
        }

        private string GetCssClassByFahrenheit(int temperatureFahrenheit)
        {
            return temperatureFahrenheit switch
            {
                (< 44) => "blue-back",
                (>= 44) and (< 75) => "green-back",
                (>= 75) => "orange-back"
            };
        }
    }
}
