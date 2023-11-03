import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

type TComment = {
    id: string,
    content: string
}

type TPost = {
    id: string,
    title: string,
    comments: TComment[]
}

const PostList = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("http://localhost:4002/posts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setPosts(data);
        }

        fetchPosts();
    }, []);

    const renderedPosts = Object.values<TPost>(posts).map((post) => {
        return (
            <div 
                key={post.id}
                className="card" 
                style={{ width: "30%", marginBottom: "20px" }}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}

export default PostList;