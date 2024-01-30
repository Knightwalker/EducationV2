import { useQuery } from "@tanstack/react-query";
import { IssuesItem } from "./IssuesItem";

export default function IssuesList() {
    const issuesQuery = useQuery({
        queryKey: ["issues"],
        queryFn: () => fetch('http://localhost:5000/api/issues').then(res => res.json())
    });

    console.log(issuesQuery.data);

    return (
        <div>
            <h2>Issues List</h2>
            {issuesQuery.isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul className="issues-list">
                    {issuesQuery.data.map((issue) => {
                        return (
                            <IssuesItem
                                key={issue.id}
                                title={issue.title}
                                number={issue.number}
                                assignee={issue.assignee}
                                commentCount={issue.comments.length}
                                createdBy={issue.createdBy}
                                createdDate={issue.createdDate}
                                labels={issue.labels}
                                status={issue.status}
                            />
                        )
                    })}
                </ul>)
            }
        </div>
    );
}
