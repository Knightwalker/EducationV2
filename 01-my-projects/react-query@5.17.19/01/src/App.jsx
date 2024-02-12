import { useEffect, useState, useReducer } from "react"

const App = () => {
    const [key, forceUpdate] = useReducer(x => x + 1, 0);
    const [num, setNum] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new";
        setLoading(true);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong. Try again.")
                }
                return response.text()
            })
            .then((num) => {
                setNum(num);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message);
            });
    }, [key]);

    if (error) {
        return (
            <p>Error: {error}</p>
        )
    }

    return (
        <button onClick={() => forceUpdate()}>Random number: {loading ? "..." : num}</button>
    )
}

export default App