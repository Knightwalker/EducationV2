interface TwoNumberCalculation {
    (x: number, y: number): number
};

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => {
    return a + b;
}

const subtract: TwoNumberCalc = (x, y) => {
    return x - y;
};

function printFormattedJSON(obj: string[]) {
    console.log(JSON.stringify(obj, null, "  "));
}

const x = printFormattedJSON(["hello", "world"]);

function invokeInFourSeconds(callback: () => undefined) {
    setTimeout(callback, 4000);
}

function invokeInFiveSeconds(callback: () => void) {
    setTimeout(callback, 5000);
}

const values: number[] = [];

invokeInFourSeconds(() => {
    values.push(4);
});

invokeInFiveSeconds(() => values.push(4));

// Construct signatures
interface DateConstructor {
    new(value: number): Date;
}

// let MyDateConstructor: DateConstructor = Date
// const d = new MyDateConstructor()

// This
function myClickHandler(
    this: HTMLButtonElement,
    event: Event
) {
    this.disabled = true;
}

// Function type best practices
async function getData(url: string): Promise<{ result: string[] }> {
    const resp = await fetch(url)
    if (resp.ok) {
        const data = (await resp.json()) as {
            result: string[]
        }
        return data
    }
    return { result: [] };
}

function loadData() {
    getData("https://example.com").then((data) => {
        console.log(data.result.join(", "))
    })
}