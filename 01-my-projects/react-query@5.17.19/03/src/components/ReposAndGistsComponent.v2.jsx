import { useQuery } from "@tanstack/react-query";

const ReposAndGistsComponent = ({ username }) => {
    const reposAndGistsQuery = useQuery({
        queryKey: ["reposAndGists"],
        queryFn: async () => {
            const responseArr = await Promise.all([
                fetch(`https://api.github.com/users/${username}/repos`),
                fetch(`https://api.github.com/users/${username}/gists`)
            ]);
            for (const response of responseArr) {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${username}. Status: ${response.status}`);
                }
            }
            const resultArr = await Promise.all(responseArr.map(response => response.json()));
            return resultArr;
        }
    });

    const [reposData, gistsData] = reposAndGistsQuery.data ?? [[], []];

    return (
        <div>
            <h2>Repos</h2>
            {reposAndGistsQuery.isLoading && <p>Loading repos...</p>}
            {reposAndGistsQuery.isError && (
                <p>Error loading: {reposAndGistsQuery.error.message}</p>
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
                <p>Error loading: {reposAndGistsQuery.error.message}</p>
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