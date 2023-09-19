import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, userId, title, body } = post;

    const navigate = useNavigate();

    const handlePostShowDetails = () => {
        navigate(`/post/${id}`);
    }

    const postStyles = {
        border: '2px solid aqua',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'
    }
    return (
        <div style={postStyles}>
            <h4>Id: {id}</h4>
            <h4>UserId: {userId}</h4>
            <h2>{title}</h2>
            <p style={{ flexGrow: 1 }}>{body}</p>
            <div>
                <Link to={`/post/${id}`}>Show Details</Link>
                <Link to={`/post/${id}`}><button>Details</button></Link>
            </div>
            <button onClick={handlePostShowDetails}>Click for Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;