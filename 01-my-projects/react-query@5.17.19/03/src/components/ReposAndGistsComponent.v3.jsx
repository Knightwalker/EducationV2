import { useQueries } from "@tanstack/react-query";

const ReposAndGistsComponent = ({ username }) => {
    const reposAndGistsQuery = useQueries({
        queries: [{
            queryKey: ["repos"],
            queryFn: () => {
                return fetch(`https://api.github.com/users/${username}/repos`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch data for ${username}. Status: ${response.status}`);
                        }
                        return response.json()
                    });
            }
        },
        {
            queryKey: ["gists"],
            queryFn: () => {
                return fetch(`https://api.github.com/users/${username}/gists`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch data for ${username}. Status: ${response.status}`);
                    }
                    return response.json()
                });
            }
        }]
    })

    const [reposQuery, gistsQuery] = reposAndGistsQuery;
    const reposData = reposQuery.data ?? [];
    const gistsData = gistsQuery.data ?? [];

    return (
        <div>
            <h2>Repos</h2>
            {reposQuery.isLoading && <p>Loading repos...</p>}
            {reposQuery.isError && (
                <p>Error loading: {reposQuery.error.message}</p>
            )}
            {reposQuery.isSuccess && (
                <ul>
                    {reposData.map((repo) => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </ul>
            )}
            <hr />

            <h2>Gists</h2>
            {gistsQuery.isLoading && <p>Loading gists...</p>}
            {gistsQuery.isError && (
                <p>Error loading: {gistsQuery.error.message}</p>
            )}
            {gistsQuery.isSuccess && (
                <ul>
                    {gistsData.map((gist) => (
                        <li key={gist.id}>{gist.description}</li>
                    ))}
                </ul>
            )}  
        </div>
    )

}

export default ReposAndGistsComponent;