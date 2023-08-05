import { observer, inject } from "mobx-react";

const App = observer(({ counterStore }) => {
    return (
        <div className="App">
            <p className="count">{counterStore.value}</p>
            <section className="controls">
                <button onClick={counterStore.increment}>Increment</button>
                <button onClick={counterStore.decrement}>Decrement</button>
                <button onClick={counterStore.reset}>Reset</button>
            </section>
        </div>
    );
})

export default inject("counterStore")(App);