using WeatherApp.Models.Weather;
using WeatherApp.Interfaces;

namespace WeatherApp.Services
{
    public class WeatherService : IWeatherService
    {
        private readonly List<CityWeatherModel> _citiesList;

        public WeatherService()
        {
            this._citiesList = new List<CityWeatherModel>
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
        }

        public List<CityWeatherModel> GetWeatherDetails()
        {
            return this._citiesList;
        }

        public CityWeatherModel? GetWeatherByCityCode(string CityCode)
        {
            CityWeatherModel? city = this._citiesList
                .FirstOrDefault(x => x.CityUniqueCode == CityCode);
            
            return city;
        }
    }
}
