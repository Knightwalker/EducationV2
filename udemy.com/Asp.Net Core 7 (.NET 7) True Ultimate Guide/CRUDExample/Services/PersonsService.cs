using Entities;
using ServiceContracts.DTO;
using ServiceContracts;
using Services.Helpers;

namespace Services
{
    public class PersonsService : IPersonsService
    {
        //private field
        private readonly List<Person> _persons;
        private readonly ICountriesService _countriesService;

        //constructor
        public PersonsService(bool initialize = true)
        {
            this._persons = new List<Person>();
            this._countriesService = new CountriesService();

            if (initialize)
            {
                this._persons.Add(new Person()
                {
                    PersonID = Guid.Parse("32DA0E77-5FB3-4AB9-A522-269F271757C2"),
                    PersonName = "Aguste",
                    Email = "aleddy0@booking.com",
                    DateOfBirth = DateTime.Parse("1993-01-02"),
                    Gender = "Male",
                    Address = "0859 Novic Terrace",
                    ReceiveNewsLetters = false,
                    CountryID = Guid.Parse("5D6BD84A-81B8-4DD2-8C6A-FDA48A2F6B5B")
                });
                this._persons.Add(new Person()
                {
                    PersonID = Guid.Parse("95FFAF49-673C-435A-A382-46FC63FD09CB"),
                    PersonName = "John",
                    Email = "john@gmail.com",
                    DateOfBirth = DateTime.Parse("1994-02-05"),
                    Gender = "Male",
                    Address = "0742 Fieldstone Lane",
                    ReceiveNewsLetters = true,
                    CountryID = Guid.Parse("135CA0FF-CB07-491C-BC96-5A5E108F0318")
                });
                this._persons.Add(new Person()
                {
                    PersonID = Guid.Parse("2B7A4A57-7954-41E7-880E-1111CA1F7DAF"),
                    PersonName = "Emma",
                    Email = "emma@gmail.com",
                    DateOfBirth = DateTime.Parse("1991-03-07"),
                    Gender = "Female",
                    Address = "0232 Fieldstone Lane",
                    ReceiveNewsLetters = false,
                    CountryID = Guid.Parse("EB8220FE-452D-4170-9F7C-39673217167F")
                });
                this._persons.Add(new Person()
                {
                    PersonID = Guid.Parse("673E25F3-C7EF-442B-98F6-1D6D8C8F38F9"),
                    PersonName = "Jane",
                    Email = "jane@gmail.com",
                    DateOfBirth = DateTime.Parse("1991-03-07"),
                    Gender = "Female",
                    Address = "0132 Fieldstone Lane",
                    ReceiveNewsLetters = true,
                    CountryID = Guid.Parse("FEA9001D-1464-4463-9BC4-A0621A3B4A7B")
                });
                this._persons.Add(new Person()
                {
                    PersonID = Guid.Parse("1425FDE6-C717-491D-8766-0D08F5439C6D"),
                    PersonName = "Jim",
                    Email = "jim@gmail.com",
                    DateOfBirth = DateTime.Parse("1995-01-03"),
                    Gender = "Male",
                    Address = "0132 Fieldstone Lane",
                    ReceiveNewsLetters = true,
                    CountryID = Guid.Parse("B45B440E-2F16-4B47-A844-BAC0E91BD341")
                });
                this._persons.Add(new Person()
                {
                    PersonID = Guid.Parse("8A95F0E3-D5E4-49DC-A247-FFC847A092EB"),
                    PersonName = "Josh",
                    Email = "josh@gmail.com",
                    DateOfBirth = DateTime.Parse("1991-03-07"),
                    Gender = "Male",
                    Address = "0119 Fieldstone Lane",
                    ReceiveNewsLetters = false,
                    CountryID = Guid.Parse("8D2E7849-FB45-4681-A243-64E8BDC789C6")
                });
            }
        }


        private PersonResponse ConvertPersonToPersonResponse(Person person)
        {
            PersonResponse personResponse = person.ToPersonResponse();
            personResponse.Country = _countriesService.GetCountryByCountryID(person.CountryID)?.CountryName;
            return personResponse;
        }

        public PersonResponse AddPerson(PersonAddRequest? personAddRequest)
        {
            //check if PersonAddRequest is not null
            if (personAddRequest == null)
            {
                throw new ArgumentNullException(nameof(personAddRequest));
            }

            //Model validation
            ValidationHelper.ModelValidation(personAddRequest);

            //convert personAddRequest into Person type
            Person person = personAddRequest.ToPerson();

            //generate PersonID
            person.PersonID = Guid.NewGuid();

            //add person object to persons list
            this._persons.Add(person);

            //convert the Person object into PersonResponse type
            return ConvertPersonToPersonResponse(person);
        }


        public List<PersonResponse> GetAllPersons()
        {
            return this._persons.Select(temp => temp.ToPersonResponse()).ToList();
        }


        public PersonResponse? GetPersonByPersonID(Guid? personID)
        {
            if (personID == null)
                return null;

            Person? person = this._persons.FirstOrDefault(temp => temp.PersonID == personID);
            if (person == null)
                return null;

            return person.ToPersonResponse();
        }

        public List<PersonResponse> GetFilteredPersons(string searchBy, string? searchString)
        {
            List<PersonResponse> allPersons = GetAllPersons();
            List<PersonResponse> matchingPersons = allPersons;

            if (string.IsNullOrEmpty(searchBy) || string.IsNullOrEmpty(searchString))
                return matchingPersons;

            switch (searchBy)
            {
                case nameof(PersonResponse.PersonName):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.PersonName) ?
                    temp.PersonName.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                case nameof(PersonResponse.Email):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Email) ?
                    temp.Email.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;


                case nameof(PersonResponse.DateOfBirth):
                    matchingPersons = allPersons.Where(temp =>
                    (temp.DateOfBirth != null) ?
                    temp.DateOfBirth.Value.ToString("dd MMMM yyyy").Contains(searchString, StringComparison.OrdinalIgnoreCase) : true).ToList();
                    break;

                case nameof(PersonResponse.Gender):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Gender) ?
                    temp.Gender.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                case nameof(PersonResponse.CountryID):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Country) ?
                    temp.Country.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                case nameof(PersonResponse.Address):
                    matchingPersons = allPersons.Where(temp =>
                    (!string.IsNullOrEmpty(temp.Address) ?
                    temp.Address.Contains(searchString, StringComparison.OrdinalIgnoreCase) : true)).ToList();
                    break;

                default: matchingPersons = allPersons; break;
            }
            return matchingPersons;
        }

        public PersonResponse UpdatePerson(PersonUpdateRequest? personUpdateRequest)
        {
            if (personUpdateRequest == null)
                throw new ArgumentNullException(nameof(Person));

            //validation
            ValidationHelper.ModelValidation(personUpdateRequest);

            //get matching person object to update
            Person? matchingPerson = this._persons.FirstOrDefault(temp => temp.PersonID == personUpdateRequest.PersonID);
            if (matchingPerson == null)
            {
                throw new ArgumentException("Given person id doesn't exist");
            }

            //update all details
            matchingPerson.PersonName = personUpdateRequest.PersonName;
            matchingPerson.Email = personUpdateRequest.Email;
            matchingPerson.DateOfBirth = personUpdateRequest.DateOfBirth;
            matchingPerson.Gender = personUpdateRequest.Gender.ToString();
            matchingPerson.CountryID = personUpdateRequest.CountryID;
            matchingPerson.Address = personUpdateRequest.Address;
            matchingPerson.ReceiveNewsLetters = personUpdateRequest.ReceiveNewsLetters;

            return matchingPerson.ToPersonResponse();
        }

        public bool DeletePerson(Guid? personID)
        {
            if (personID == null)
            {
                throw new ArgumentNullException(nameof(personID));
            }

            Person? person = this._persons.FirstOrDefault(temp => temp.PersonID == personID);
            if (person == null)
                return false;

            this._persons.RemoveAll(temp => temp.PersonID == personID);

            return true;
        }
    }
}