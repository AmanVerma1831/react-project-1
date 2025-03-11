import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <>
            <main>
                <div className="error-container">
                    <div className="error-msg">
                        <h1>{err.status + " : " + err.statusText}</h1>
                        <h2>UH OH! You're lost.</h2>
                        <p>The page you are looking for does not exist.
                            How you got here is a mystery. But you can click the button below
                            to go back to the homepage.
                        </p>
                        <button className="login-button">HOME</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Error;