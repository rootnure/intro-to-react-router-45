import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const { id, title, body } = post;

    const detailsPostStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
    }

    const handleGoBack = () => {
        navigate(-1);
    }

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