import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const User = ( {user} ) => {
    const {id, name, email, phone} = user;
    const userStyles = {
        border: '2px solid gray',
        padding: '15px',
        borderRadius: '5px',
    }
    return (
        <div style={userStyles}>
            <h4>{id}</h4>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;