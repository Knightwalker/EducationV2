import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: ""
    });
    // const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    // const [breed, setBreed] = useState("");
    // const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [adoptedPet] = useContext(AdoptedPetContext);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    // useEffect(() => {
    //     requestPets();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // async function requestPets() {
    //     const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    //     const json = await res.json();

    //     setPets(json.pets);
    // }

    return (
        <div className="my-0 mx-auto w-11/12">
            <form   
                className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
                onSubmit={e => {
                    e.preventDefault();
                    // requestPets();
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    setRequestParams(obj);
                }}
            >
                {
                    adoptedPet ? (
                        <div className="pet image-container">
                            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                        </div>
                    ) : null
                }
                <label htmlFor="location">
                    Location
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="mb-5 block w-60"
                        placeholder="location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        className="mb-5 block w-60"
                        value={animal}
                        onChange={e => {
                            setAnimal(e.target.value);
                            // setBreed("");
                        }}
                    >
                        <option></option>
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        name="breed"
                        className="mb-5 block w-60 disabled:opacity-50"
                        disabled={breeds.length === 0}
                        // value={breed}
                        // onChange={e => setBreed(e.target.value)}
                    >
                        <option></option>
                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none bg-orange-500 w-60">Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;