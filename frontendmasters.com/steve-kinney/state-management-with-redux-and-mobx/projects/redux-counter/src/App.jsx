import { useDispatch, useSelector } from "react-redux";
import { incrementValueAction, decrementValueAction, resetValueAction } from "./state/store";
import "./styles.scss";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    return (
        <div className="App">
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={() => dispatch(incrementValueAction())}>Increment</button>
                <button onClick={() => dispatch(decrementValueAction())}>Decrement</button>
                <button onClick={() => dispatch(resetValueAction())}>Reset</button>
            </section>
        </div>
    );
}

export default App;