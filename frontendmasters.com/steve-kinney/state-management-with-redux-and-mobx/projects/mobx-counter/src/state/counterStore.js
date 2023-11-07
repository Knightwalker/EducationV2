import { observable, makeObservable, action } from "mobx";

class CounterStore {
    constructor() {
        this.value = 0;
        makeObservable(this, {
            value: observable,
            increment: action,
            decrement: action,
            reset: action
        });
    }

    increment = () => {
        this.value++;
    };

    decrement = () => {
        this.value--;
    };

    reset = () => {
        this.value = 0;
    }
}

export default CounterStore;