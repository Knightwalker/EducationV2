using System;
using System.Collections.Generic;
using Entities;
using ServiceContracts;
using ServiceContracts.DTO;
using Services;

namespace CRUDTests
{
    public class CountriesServiceTest
    {
        private readonly ICountriesService _countriesService;

        // Constructor
        public CountriesServiceTest()
        {
            this._countriesService = new CountriesService();
        }

        #region AddCountry
        // When CountryAddRequest is null, it should throw ArgumentNullException
        [Fact]
        public void AddCountry_NullCountry()
        {
            // Arrange
            CountryAddRequest? request = null;

            // Assert
            Assert.Throws<ArgumentNullException>(() =>
            {
                // Act
                this._countriesService.addCountry(request);
            });
        }

        // When the CountryName is null, it should throw ArgumentException
        [Fact]
        public void AddCountry_CountryNameIsNull()
        {
            // Arrange
            CountryAddRequest? request = new CountryAddRequest()
            {
                CountryName = null
            };

            // Assert
            Assert.Throws<ArgumentException>(() =>
            {
                // Act
                this._countriesService.addCountry(request);
            });
        }

        // When the CountryName is duplicate, it should throw ArgumentException
        [Fact]
        public void AddCountry_DuplicateCountryName()
        {
            // Arrange
            CountryAddRequest? request1 = new CountryAddRequest()
            {
                CountryName = "USA"
            };
            CountryAddRequest? request2 = new CountryAddRequest()
            {
                CountryName = "USA"
            };

            // Assert
            Assert.Throws<ArgumentException>(() =>
            {
                // Act
                this._countriesService.addCountry(request1);
                this._countriesService.addCountry(request2);
            });
        }

        // When you supply proper country name, it should insert (add) the country to existing list of countries
        [Fact]
        public void AddCountry_ProperCountryDetails()
        {
            // Arrange
            CountryAddRequest? request = new CountryAddRequest()
            {
                CountryName = "Japan"
            };

            // Act
            CountryResponse response = this._countriesService.addCountry(request);

            List<CountryResponse> countries_from_GetAllCountries = this._countriesService.GetAllCountries();

            // Assert
            Assert.True(response.CountryID != Guid.Empty);
            Assert.Contains(response, countries_from_GetAllCountries);
        }
        #endregion

        #region GetAllCountries
        [Fact]
        // The list of countries should be empty by default (before adding any countries)
        public void GetAllCountries_EmptyList()
        {
            // Act
            List<CountryResponse> actual_country_response_list = this._countriesService.GetAllCountries();

            // Assert
            Assert.Empty(actual_country_response_list);
        }

        [Fact]
        public void GetAllCountries_AddFewCountries()
        {
            // Arrange
            List<CountryAddRequest> country_request_list = new List<CountryAddRequest>()
            {
                new CountryAddRequest() { CountryName = "USA" },
                new CountryAddRequest() { CountryName = "UK" },
            };

            // Act
            List<CountryResponse> countries_list_from_add_country = new List<CountryResponse>();
            foreach (CountryAddRequest country_request in country_request_list)
            {
                CountryResponse countryResponse = this._countriesService.addCountry(country_request);
                countries_list_from_add_country.Add(countryResponse);
            }

            List<CountryResponse> actualCountryResponseList = this._countriesService.GetAllCountries();

            // Read each element from countries_list_from_add_country
            foreach(CountryResponse expected_country in countries_list_from_add_country)
            {
                Assert.Contains(expected_country, actualCountryResponseList);
            }

        }
        #endregion

        #region GetCountryByCountryID
        
        [Fact]
        // If we supply null as CountryID, it should return null as CountryResponse
        public void GetCountryByCountryID_NullCountryID()
        {
            // Arrange
            Guid? countryID = null;

            // Act
            CountryResponse? country_response_from_get_method = this._countriesService.GetCountryByCountryId(countryID);

            // Assert
            Assert.Null(countryID);
        }

        [Fact]
        // If we supply a valid country id, it should return the matching country details as CountryResponse object
        public void GetCountryByCountryID_ValidCountryID()
        {
            // Arrange
            CountryAddRequest? country_add_request = new CountryAddRequest()
            {
                CountryName = "China"
            };
            
            CountryResponse country_response_from_add_request = this._countriesService.addCountry(country_add_request);

            // Act
            CountryResponse? country_response_from_get = this._countriesService.GetCountryByCountryId(country_response_from_add_request.CountryID);

            // Assert
            Assert.Equal(country_response_from_add_request, country_response_from_get);

        }

        #endregion
    }
}
