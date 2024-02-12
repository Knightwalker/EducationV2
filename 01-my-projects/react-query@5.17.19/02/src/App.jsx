import { useQuery } from "@tanstack/react-query"

const fetchGithubUser = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong. Try again.")
            }
            return response.json()
        });
}

const GithubUser = ({ username }) => {
    const queryInstance = useQuery({
        queryKey: ["username"],
        queryFn: () => fetchGithubUser(username)
    });

    if (queryInstance.isLoading) {
        return (
            <p>Loading...</p>
        );
    }
    if (queryInstance.isError) {
        return (
            <p>Error: {queryInstance.error.message}</p>
        )
    }

    return (
        <p><pre>{JSON.stringify(queryInstance.data, null, 2)}</pre></p>
    );
}

const App = () => {
    return <GithubUser username={"knightwalker"} />
};

export default App;