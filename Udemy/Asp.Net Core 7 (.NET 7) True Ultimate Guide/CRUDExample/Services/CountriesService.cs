using Entities;
using ServiceContracts;
using ServiceContracts.DTO;

namespace Services
{
    public class CountriesService : ICountriesService
    {
        private readonly List<Country> _countries;

        public CountriesService()
        {
            this._countries = new List<Country>();
        }

        public CountryResponse addCountry(CountryAddRequest? countryAddRequest)
        {
            // Validation: countryAddRequest can't be null
            if (countryAddRequest == null)
            {
                throw new ArgumentNullException(nameof(countryAddRequest));
            }

            // Validation: CountryName can't be null
            if (countryAddRequest.CountryName == null)
            {
                throw new ArgumentException(nameof(countryAddRequest.CountryName));
            }

            // Validation: CountryName can't be duplicate
            int count = _countries
                .Where(temp => temp.CountryName == countryAddRequest.CountryName)
                .Count();

            if (count > 0)
            {
                throw new ArgumentException("Given country name already exists");
            }

            // Convert object from CountryAddRequest to Country type
            Country country = countryAddRequest.toCountry();

            // Generate CountryID
            country.CountryID = Guid.NewGuid();

            // Add country object into _countries
            _countries.Add(country);

            return country.ToCountryResponse();
        }

        public List<CountryResponse> GetAllCountries()
        {
            // Converts all countries from "Country" type to "CountryResponse" type
            List<CountryResponse> countries = this._countries
                .Select(country => country.ToCountryResponse())
                .ToList();

            // Return all CountryResponse objects
            return countries;
        }

        public CountryResponse? GetCountryByCountryId(Guid? CountryID)
        {
            if (CountryID == null)
            {
                return null;
            }

            Country? country_response_from_list = this._countries
                .FirstOrDefault(temp => temp.CountryID == CountryID);

            if (country_response_from_list == null)
            {
                return null;
            }

            return country_response_from_list.ToCountryResponse();
        }

    }
}