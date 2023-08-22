// null
const userInfo = {
    name: "Mike",
    email: "mike@example.com",
    secondaryEmail: null, // user has no secondary email
}

// undefined
const formInProgress = {
    createdAt: new Date(),
    data: new FormData(),
    completedAt: undefined, //
}
function submitForm() {
    // formInProgress.completedAt = new Date()
}

// Non-null assertion operator
type GroceryCart = {
    fruits?: { name: string; qty: number }[]
    vegetables?: { name: string; qty: number }[]
}

const cart: GroceryCart = {}

// cart.fruits.push({ name: "kumkuat", qty: 1 })
cart.fruits!.push({ name: "kumkuat", qty: 1 })

// Definite assignment operator
class ThingWithAsyncSetup {
    setupPromise: Promise<any>; // ignore the <any> for now
    isSetup: boolean;

    constructor() {
        this.setupPromise = new Promise((resolve) => {
            this.isSetup = false;
            return this.doSetup(resolve);
        }).then(() => {
            this.isSetup = true;
        });
    }

    private async doSetup(resolve: (value: unknown) => void) {
        // some async stuff
    }
}

let myThing = new ThingWithAsyncSetup();
myThing.isSetup // what if this isn't assigned yet?