const getData = async (slug) => {
    // const post = await getDataFromCMS(slug);
    const post = { name: "post1" };
    return post;
}

export default async function BlogPost({ params }) {
    const { slug } = params;
    const post = await getData(slug);
    return (
        <div className="Blog">
            <h1>Hello From Blog</h1>
            <div>{post.name}</div>
        </div>
    )
}