let a: 5 | 6 | 7 // anything in { 5, 6, 7 }
let b: null // anything in { null }
let c: {
    favoriteFruit?: "pineapple" // { "pineapple", undefined }
}

// Top types (any & unknown)
// let flexible: any = 4
// flexible = "Download some more ram"
// flexible = window.document
// flexible = setTimeout

// let flexible: any = 14
// flexible.it.is.possible.to.access.any.deep.property

// console.log(window, Promise, setTimeout, "foo");
let myUnknown: unknown = 14
// myUnknown.it.is.possible.to.access.any.deep.property
if (typeof myUnknown === "string") {
    // This code runs for { myUnknown| all strings }
    console.log(myUnknown, "is a string")
} else if (typeof myUnknown === "number") {
    // This code runs for { myUnknown| all numbers }
    console.log(myUnknown, "is a number")
} else {
    // this would run for "the leftovers"
    //       { myUnknown| anything except string or numbers }
}

// Bottom type (never)
function obtainRandomVehicle(): any {
    return {} as any
}
/// ---cut---
class Car {
    drive() {
        console.log("vroom")
    }
}
class Truck {
    tow() {
        console.log("dragging something")
    }
}
class Boat {
    isFloating() {
        return true
    }
}
type Vehicle = Truck | Car | Boat

let myVehicle: Vehicle = obtainRandomVehicle()

// The exhaustive conditional
if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
    myVehicle.drive() // Car
} else {
    // NEITHER!
    // const neverValue: never = myVehicle
}