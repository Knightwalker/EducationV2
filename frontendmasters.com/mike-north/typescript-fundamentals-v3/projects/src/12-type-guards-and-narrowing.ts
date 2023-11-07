let value:
    | Date
    | null
    | undefined
    | "pineapple"
    | [number]
    | { dateRange: [Date, Date] }

// instanceof
if (value instanceof Date) {
    value
}

// typeof
else if (typeof value === "string") {
    value
}

// Specific value check
else if (value === null) {
    value
}

// Truthy/falsy check
else if (!value) {
    value
}

// Some built-in functions
else if (Array.isArray(value)) {
    value
}

// Property presence check
else if ("dateRange" in value) {
    value
} else {
    value
}


interface CarLike {
    make: string
    model: string
    year: number
}

let maybeCar: unknown

// the guard
function isCarLike(
    valueToTest: any
): valueToTest is CarLike {
    return (
        valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
    )
}

// using the guard
if (isCarLike(maybeCar)) {
    maybeCar
}

// Writing high-quality guards
function isNull(val: any): val is null {
    return !val
}

const empty = "";
const zero = 0;
if (isNull(zero)) {
    console.log(zero) // is it really impossible to get here?
}