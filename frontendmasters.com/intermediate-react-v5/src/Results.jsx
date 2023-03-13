import Pet from "./Pet";

const Results = ({ pets }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map(pet => (
                    <Pet
                        key={pet.id}
                        id={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                    />
                ))
            )}
        </div>
    );
};

export default Results;