import { useEffect, useState } from "react";

type TComment = {
    id: string,
    content: string
}

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState<TComment[]>([]);

    useEffect(() => {          
        const fetchComments = async () => {
            const res = await fetch(`http://localhost:4001/posts/${postId}/comments`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json() as TComment[];
            setComments(data);
        }

        fetchComments();
    }, []);

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