import { useSelector } from "react-redux";
// import { set, increment, decrement } from "./actions";
import { SetCounter } from "./SetCounter";
import { actions } from "./store";

export const Counter = () => {
    const incident = "Incident";
    const count = useSelector((state) => state.count);
  
    return (
      <main className="Counter">
        <h1>Days Since Last {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={() => actions.increment()}>Increment</button>
          <button onClick={() => actions.set(0)}>Reset</button>
          <button onClick={() => actions.decrement()}>Decrement</button>
        </section>
        <SetCounter />
      </main>
    );
  };
  
  export default Counter;
  