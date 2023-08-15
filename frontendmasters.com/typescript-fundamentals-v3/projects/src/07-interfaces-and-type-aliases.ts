// @filename: types.ts
type UserContactInfo = {
    name: string
    email: string
}

const printContactInfo = (info: UserContactInfo) => {
    console.log(info)
}

const painter = {
    name: "Robert Ross",
    email: "bross@pbs.org",
    favoriteColor: "Titanium White",
}

printContactInfo(painter);

///////////////////////////////////////////////////////////
type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = [
    "success",
    { name: string; email: string }
];
type UserInfoOutcome =
    | UserInfoOutcomeError
    | UserInfoOutcomeSuccess

/**
* CLEANED UP version
*/
export function maybeGetUserInfo(): UserInfoOutcome {
    // implementation is the same in both examples
    if (Math.random() > 0.5) {
        return [
            "success",
            { name: "Mike North", email: "mike@example.com" },
        ];
    } else {
        return [
            "error",
            new Error("The coin landed on TAILS :("),
        ];
    }
}

console.log(maybeGetUserInfo());

///////////////////////////////////////////////////////////
interface IAnimal {
    eat(food: string): string
}

interface IDog extends IAnimal {
    bark(): string
}

class Animal implements IAnimal {
    eat(food: string): string {
        return `eating ${food}`;
    }
}
class Dog extends Animal implements IDog {
    bark(): string {
        return "woof";
    }
}

const dog = new Dog()
console.log(dog.eat("snacks"));
console.log(dog.bark());