import { useQueries } from "@tanstack/react-query";

const IssueLabelFilterComponent = ({ owner, repo }) => {
    const labelsAndIssuesQuery = useQueries({
        queries: [{
            queryKey: ["labels", owner, repo],
            queryFn: async () => {
                const url = `https://api.github.com/repos/${owner}/${repo}/labels`;
                const response = await fetch(url, {
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${owner}. Status: ${response.status}`);
                }
                const result = await response.json();
                return result;
            }
        },
        {
            queryKey: ["issues", owner, repo],
            queryFn: async () => {
                const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
                const response = await fetch(url, {
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${owner}. Status: ${response.status}`);
                }
                const result = await response.json();
                return result;
            }
        }],
        combine: (results) => {
            return (results, {
                data: results.map(result => result.data),
                error: results.map(result => result.error),
                isLoading: results.some(result => result.isLoading),
                isError: results.some(result => result.isError),
                isSuccess: results.every(result => result.isSuccess)
            })
        }
    });

    return (
        <div>
            <h2>Labels</h2>
            {labelsAndIssuesQuery.isLoading && <p>Loading labels...</p>}
            {labelsAndIssuesQuery.isError && (
                <p>Error loading: {labelsAndIssuesQuery.error[0].message}</p>
            )}
            {labelsAndIssuesQuery.isSuccess && (
                <ul>
                    {labelsAndIssuesQuery.data[0].map((label) => (
                        <li key={label.id}>{label.name}</li>
                    ))}
                </ul>
            )}
            <hr />

            <h2>Issues</h2>
            {labelsAndIssuesQuery.isLoading && <p>Loading issues...</p>}
            {labelsAndIssuesQuery.isError && (
                <p>Error loading: {labelsAndIssuesQuery.error[1].message}</p>
            )}
            {labelsAndIssuesQuery.isSuccess && (
                <ul>
                    {labelsAndIssuesQuery.data[1].map((issue) => (
                        <li key={issue.id}>{issue.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default IssueLabelFilterComponent;