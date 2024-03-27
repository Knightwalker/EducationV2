import { Link } from "react-router-dom";
import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../services/useUserData";

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
    const assigneeUser = useUserData(assignee);
    const createdByUser = useUserData(createdBy);

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
                    #{number} opened {relativeDate(createdDate)} {createdByUser.isSuccess ? `by ${createdByUser.data.name}` : <span>.....</span>}
                </small>
            </div>
            {assigneeUser.isSuccess ? (
                <img 
                    src={assigneeUser.data.profilePictureUrl}
                    className="assigned-to"
                    alt={`Assigned to ${assigneeUser.data.name}`}
                />
            ) : <span>...</span>}
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
