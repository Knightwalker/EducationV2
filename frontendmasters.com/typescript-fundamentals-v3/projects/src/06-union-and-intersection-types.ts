function flipCoin(): "heads" | "tails" {
    if (Math.random() > 0.5) {
        return "heads";
    }
    return "tails";
}

// const outcome = flipCoin();

function maybeGetUserInfo():
    | ["error", Error]
    | ["success", { name: string; email: string }] {
    if (flipCoin() === "heads") {
        return [
            "success",
            { name: "Mike North", email: "mike@example.com" },
        ]
    } else {
        return [
            "error",
            new Error("The coin landed on TAILS :("),
        ]
    }
}

const outcome = maybeGetUserInfo();
const [first, second] = outcome;

// Narrowing with type guards
if (second instanceof Error) {
    console.log(second.message);
} else {
    console.log(second.email);
}

// Discriminated Unions
if (outcome[0] === "error") {
    console.log(outcome[1].message);
} else {
    console.log(outcome[1].email);
}

// Intersection Types in TypeScript
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7 // 1w in ms

function makeWeek(): Date & { end: Date } {
    const start = new Date();
    const end = new Date(start.valueOf() + ONE_WEEK);

    return { ...start, end } // kind of Object.assign
}

const thisWeek = makeWeek();
thisWeek.toISOString(); // yes but it doesn't work because when we destructure `...start` the date object screws up. The new destructured object doesn't inherit the Date prototype.
thisWeek.end.toISOString();