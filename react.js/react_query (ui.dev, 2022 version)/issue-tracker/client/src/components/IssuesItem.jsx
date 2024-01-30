import { Link } from "react-router-dom";
import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";

export const IssuesItem = ({
    title,
    number,
    assignee,
    commentCount,
    createdBy,
    createdDate,
    labels,
    status
}) => {
    return (
        <li>
            <div>
                {status === "done" || status === "canceled" ? (
                    <GoIssueClosed style={{ color: "red" }} />
                ) : (
                    <GoIssueOpened style={{ color: "green" }} />
                )}
            </div>
            <div className="issue-content">
                <span>
                    <Link to={`/issue/${number}`}>{title}</Link>
                    {labels.map((label, idx) => {
                        return (
                            <span
                                key={idx}
                                className={`label red`}
                            >
                                {label}
                            </span>
                        );
                    })}
                </span>
                <small>
                    #{number} opened {relativeDate(createdDate)} by {createdBy}
                </small>
            </div>
            {assignee ? <div>{assignee}</div> : null}
            <span className="comment-count">
                {commentCount > 0 ? (
                    <>
                        <GoComment />
                        {commentCount}
                    </>
                ) : null}
            </span>
        </li>
    );
};
