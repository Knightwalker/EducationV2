import { useState } from "react";

type TComment = {
    id: string,
    content: string,
    status: "approved" | "pending" | "rejected"
}

type TCommentListProps = {
    comments: TComment[]
}

const CommentList = ({ comments }: TCommentListProps) => {
    const renderedComments = comments.map((comment) => {
        let content;

        if (comment.status === "approved") {
            content = comment.content;
        } else if (comment.status === "pending") {
            content = "This comment is awaiting moderation"
        } else if (comment.status === "rejected") {
            content = "This comment has been rejected"
        }

        return (
            <li key={comment.id}>
                {content}
            </li>
        )
    })

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList;