using System;
using Entities;
using ServiceContracts;
using ServiceContracts.DTO;
using System.ComponentModel.DataAnnotations;
using Services.Helpers;

namespace Services
{
    public class PersonsService : IPersonsService
    {
        private readonly List<Person> _persons;
        private readonly ICountriesService _countriesService;

        public PersonsService()
        {
            this._persons = new List<Person>();
            this._countriesService = new CountriesService();
        }

        private PersonResponse ConvertPersonIntoPersonResponse(Person person)
        {
            PersonResponse personResponse = person.ToPersonResponse();
            personResponse.Country = this._countriesService.GetCountryByCountryId(person.CountryID)?.CountryName;
            return personResponse;
        }

        public PersonResponse AddPerson(PersonAddRequest? personAddRequest)
        {
            // Check if "personAddRequest" is not null
            if (personAddRequest == null)
            {
                throw new ArgumentNullException(nameof(personAddRequest));
            }

            // Model validations
            ValidationHelper.ModelValidation(personAddRequest);

            if (string.IsNullOrEmpty(personAddRequest.PersonName))
            {
                throw new ArgumentException("PersonName can't be blank");
            }

            // Convert "personAddRequest" from "PersonAddRequest" type to "Person"
            Person person = personAddRequest.toPerson();

            // Generate a new PersonID
            person.PersonID = Guid.NewGuid();

            // Then add it into List<Person>
            this._persons.Add(person);

            // Convert the Person object into PersonResponse type
            PersonResponse personResponse = this.ConvertPersonIntoPersonResponse(person);
            return personResponse;
        }

        public List<PersonResponse> GetAllPersons()
        {
            // Convert all persons from "Person" type to "PersonResponse" type.
            // Return all PersonResponse objects
            return this._persons.Select(x => x.ToPersonResponse()).ToList();
        }

        public PersonResponse? GetPersonByPersonID(Guid? PersonID)
        {
            // Check if "personID" is not null.
            if (PersonID == null)
            {
                return null;
            }

            // Get matching person from List<Person> based personID.
            Person? person = this._persons
                .FirstOrDefault(x => x.PersonID == PersonID);

            if (person == null)
            {
                return null;
            }

            // Convert matching person object from "Person" to "PersonResponse" type.
            PersonResponse person_response = person.ToPersonResponse();

            // Return PersonResponse object
            return person_response;
        }

        public List<PersonResponse> GetFilteredPersons(string searchBy, string? searchString)
        {
            // Check if "searchBy" is not null.
            List<PersonResponse> allPersons = GetAllPersons();
            List<PersonResponse> matchingPersons = allPersons;

            if (string.IsNullOrEmpty(searchBy) || string.IsNullOrEmpty(searchString))
                return matchingPersons;

            switch (searchBy)
            {
                case nameof(Person.PersonName):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.PersonName) ?
                    temp.PersonName.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                case nameof(Person.Email):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Email) ?
                    temp.Email.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;


                case nameof(Person.DateOfBirth):
                    matchingPersons = allPersons.Where(temp =>
                    (temp.DateOfBirth != null) ?
                    temp.DateOfBirth.Value.ToString("dd MMMM yyyy").Contains(searchString, StringComparison.OrdinalIgnoreCase) : true).ToList();
                    break;

                case nameof(Person.Gender):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Gender) ?
                    temp.Gender.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                case nameof(Person.CountryID):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Country) ?
                    temp.Country.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                case nameof(Person.Address):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Address) ?
                    temp.Address.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                default: matchingPersons = allPersons; break;
            }
            return matchingPersons;
        }

    }
}
