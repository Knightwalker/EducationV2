import { useQuery } from "@tanstack/react-query";

const IssueLabelFilterComponent = ({ owner, repo }) => {
    const labelsQuery = useQuery({
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
    });

    const issuesQuery = useQuery({
        queryKey: ["issues", owner, repo],
        queryFn: async () => {
            const url = `https://api.github.com/repos/${owner}/${repo}/issues?labels=${labelsQuery.data[1].name}`;
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
        },
        enabled: !!labelsQuery.data
    });

    return (
        <div>
            <h2>Labels</h2>
            {labelsQuery.isLoading && <p>Loading labels...</p>}
            {labelsQuery.isError && (
                <p>Error loading: {labelsQuery.error.message}</p>
            )}
            {labelsQuery.isSuccess && (
                <ul>
                    {labelsQuery.data.map((label) => (
                        <li key={label.id}>{label.name}</li>
                    ))}
                </ul>
            )}
            <hr />

            <h2>Issues</h2>
            {issuesQuery.isLoading && <p>Loading issues...</p>}
            {issuesQuery.isError && (
                <p>Error loading: {issuesQuery.error.message}</p>
            )}
            {issuesQuery.isSuccess && (
                <ul>
                    {issuesQuery.data.map((issue) => (
                        <li key={issue.id}>{issue.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default IssueLabelFilterComponent;