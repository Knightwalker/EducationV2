// let car: {
//     make: string
//     model: string
//     year: number
// } = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2002
// }

/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car: {
    make: string
    model: string
    year: number
    chargeVoltage?: number
}) {
    let str = `${car.make} ${car.model} (${car.year})`;

    if (typeof car.chargeVoltage !== "undefined") {
        str += `// ${car.chargeVoltage.toFixed(2)}v`;
    }

    console.log(str);
}

// Works
printCar({
    make: "Honda",
    model: "Accord",
    year: 2017
});

// Also works
printCar({
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    chargeVoltage: 220,
});

const phones: {
    [k: string]: {
        country: string
        area: string
        number: string
    }
} = {
    home: { country: "+1", area: "211", number: "652-4515" },
    work: { country: "+1", area: "670", number: "752-5856" },
    fax: { country: "+1", area: "322", number: "525-4357" },
}

const fileExtensions: string[] = ["js", "ts"];

const cars: {
    make: string
    model: string
    year: number
}[] = [{
    make: "Honda",
    model: "Accord",
    year: 2017
},
{
    make: "Tesla",
    model: "Model 3",
    year: 2020
}];

const myCarTouple: [number, string, string] = [2017, "Honda", "Accord"];
const [year, make, model] = myCarTouple;