import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleGoHome = () => {
        navigate('/');
    }
    console.log(error);
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back where you from</p>
                    <button onClick={handleGoBack}>Go Back</button>
                    <button onClick={handleGoHome}>Home</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;