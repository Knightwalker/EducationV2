import { useState } from "react";

type TComment = {
    id: string,
    content: string
}

type TCommentListProps = {
    comments: TComment[]
}

const CommentList = ({ comments }: TCommentListProps) => {
    const renderedComments = comments.map((comment) => {
        return (
            <li key={comment.id}>
                {comment.content}
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