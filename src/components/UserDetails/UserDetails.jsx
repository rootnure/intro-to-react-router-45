import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>Website: <a target="_blank" rel="noreferrer" href={`https://www.${website}`}>{website}</a></p>
        </div>
    );
};



export default UserDetails;