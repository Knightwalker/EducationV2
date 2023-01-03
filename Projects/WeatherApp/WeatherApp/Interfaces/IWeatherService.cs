using WeatherApp.Models.Weather;

namespace WeatherApp.Interfaces
{
    public interface IWeatherService
    {
        /// <summary>
        /// Returns a list of CityWeather objects that contains weather details of cities 
        /// </summary>
        /// <returns>
        /// List of CityWeather objects that contains weather details of cities
        /// </returns>
        List<CityWeatherModel> GetWeatherDetails();

        /// <summary>
        /// Returns an object of CityWeather based on the given city code
        /// </summary>
        /// <param name="CityCode">CityCode to search</param>
        /// <returns>CityWeather object that contains weather details of the selected city</returns>
        CityWeatherModel? GetWeatherByCityCode(string CityCode);
    }
}
