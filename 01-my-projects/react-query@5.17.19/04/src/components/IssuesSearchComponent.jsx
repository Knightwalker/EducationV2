import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const IssuesSearchComponent = () => {
    const [search, setSearch] = useState("");
    const queryString = "q=" + encodeURIComponent(`${search} is:issue repo:facebook/react-native`);

    const issuesQuery = useQuery({
        queryKey: ["issues", search],
        queryFn: async () => {
            const url = `https://api.github.com/search/issues?${queryString}`;
            const response = await fetch(url, {
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        },
        enabled: !!search
    });

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSearch(e.target.elements.search.value)
            }}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for issue"
                />
            </form>
            {issuesQuery.isLoading && (<p>Loading issues...</p>)}
            {issuesQuery.isSuccess && (
                <ul>
                    {issuesQuery.data.items.map((issue) => {
                        return <li key={issue.id}>{issue.title}</li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default IssuesSearchComponent;