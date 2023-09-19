import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const {postId} = useParams();
    console.log(postId);
    
    const detailsPostStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
    }
    
    const handleGoBack = () => {
        navigate(-1);
    }

    const { id, title, body } = post;

    return (
        <div style={detailsPostStyles}>
            <div></div>
            <div style={{gridColumn: '2/span 2'}}>
                <h4>Details for Post ID: {id}</h4>
                <h2>{title}</h2>
                <p><small>{body}</small></p>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
            <div></div>
        </div>
    );
};

export default PostDetails;