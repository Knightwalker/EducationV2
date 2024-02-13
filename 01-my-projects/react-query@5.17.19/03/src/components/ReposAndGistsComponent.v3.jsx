import { useQueries } from "@tanstack/react-query";

const ReposAndGistsComponent = ({ username }) => {
    const reposAndGistsInstance = useQueries({
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
        }],
        combine: (results) => {
            return ([...results, {
                isLoading: results.some(result => result.isLoading),
                isError: results.some(result => result.isError),
                isSuccess: results.every(result => result.isSuccess)
            }]);
        }
    })

    const [reposQuery, gistsQuery, reposAndGistsQuery] = reposAndGistsInstance;
    const reposData = reposQuery.data ?? [];
    const gistsData = gistsQuery.data ?? [];

    return (
        <div>
            <h2>Repos</h2>
            {reposAndGistsQuery.isLoading && <p>Loading repos...</p>}
            {reposAndGistsQuery.isError && (
                <p>Error loading: {reposQuery.error.message}</p>
            )}
            {reposAndGistsQuery.isSuccess && (
                <ul>
                    {reposData.map((repo) => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </ul>
            )}
            <hr />

            <h2>Gists</h2>
            {reposAndGistsQuery.isLoading && <p>Loading gists...</p>}
            {reposAndGistsQuery.isError && (
                <p>Error loading: {gistsQuery.error.message}</p>
            )}
            {reposAndGistsQuery.isSuccess && (
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