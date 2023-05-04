using Entities;
using ServiceContracts;
using ServiceContracts.DTO;

namespace Services
{
    public class CountriesService : ICountriesService
    {
        //private field
        private readonly List<Country> _countries;

        //constructor
        public CountriesService(bool initialize = true)
        {
            this._countries = new List<Country>();
            if (initialize)
            {
                this._countries.AddRange(new List<Country>
                {
                    new Country()
                    {
                        CountryID = Guid.Parse("5D6BD84A-81B8-4DD2-8C6A-FDA48A2F6B5B"),
                        CountryName = "USA"
                    },
                    new Country()
                    {
                        CountryID = Guid.Parse("135CA0FF-CB07-491C-BC96-5A5E108F0318"),
                        CountryName = "Canada"
                    },
                    new Country()
                    {
                        CountryID = Guid.Parse("EB8220FE-452D-4170-9F7C-39673217167F"),
                        CountryName = "Germany"
                    },
                    new Country()
                    {
                        CountryID = Guid.Parse("FEA9001D-1464-4463-9BC4-A0621A3B4A7B"),
                        CountryName = "UK"
                    },
                    new Country()
                    {
                        CountryID = Guid.Parse("B45B440E-2F16-4B47-A844-BAC0E91BD341"),
                        CountryName = "India"
                    },
                    new Country()
                    {
                        CountryID = Guid.Parse("8D2E7849-FB45-4681-A243-64E8BDC789C6"),
                        CountryName = "Australia"
                    }
                });
            }
        }

        public CountryResponse AddCountry(CountryAddRequest? countryAddRequest)
        {

            //Validation: countryAddRequest parameter can't be null
            if (countryAddRequest == null)
            {
                throw new ArgumentNullException(nameof(countryAddRequest));
            }

            //Validation: CountryName can't be null
            if (countryAddRequest.CountryName == null)
            {
                throw new ArgumentException(nameof(countryAddRequest.CountryName));
            }

            //Validation: CountryName can't be duplicate
            if (_countries.Where(temp => temp.CountryName == countryAddRequest.CountryName).Count() > 0)
            {
                throw new ArgumentException("Given country name already exists");
            }

            //Convert object from CountryAddRequest to Country type
            Country country = countryAddRequest.ToCountry();

            //generate CountryID
            country.CountryID = Guid.NewGuid();

            //Add country object into _countries
            _countries.Add(country);

            return country.ToCountryResponse();
        }

        public List<CountryResponse> GetAllCountries()
        {
            return _countries.Select(country => country.ToCountryResponse()).ToList();
        }

        public CountryResponse? GetCountryByCountryID(Guid? countryID)
        {
            if (countryID == null)
                return null;

            Country? country_response_from_list = _countries.FirstOrDefault(temp => temp.CountryID == countryID);

            if (country_response_from_list == null)
                return null;

            return country_response_from_list.ToCountryResponse();
        }
    }
}