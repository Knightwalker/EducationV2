import { useState } from "react";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            content: content
        };

        await fetch(`http://localhost:4001/posts/${postId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        setContent("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>New Comment</label>
                    <input
                        className="form-control"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate;