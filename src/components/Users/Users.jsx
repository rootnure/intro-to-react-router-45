import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    const usersStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }

    // state --> hold data
    // state --> loader state
    // effect --> fetch()
    // state --> set data and change loader state
    
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <div style={usersStyles}>
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;