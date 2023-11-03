import { useState } from "react";

const PostCreate = () => {
    const [title, setTitle] = useState("");
    
    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title: title
        };

        await fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        setTitle("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>Title</label>
                    <input 
                        className="form-control" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate;