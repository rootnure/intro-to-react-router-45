import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    const posts = useLoaderData();

    const postsStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px'
    }

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div style={postsStyles}>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;