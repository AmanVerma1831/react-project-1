import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (<>
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo_img_container">
                    <Link to="/" className="" aria-current="page">
                        <img src="https://bitbucket.org/!api/2.0/repositories/namastedev/namaste-react-live/src/a1e0a48ea31065dc6463974df4b5b5b5a2829c17/src/assets/img/foodvilla.png" className="logo" alt="Food Villa Logo" />
                    </Link>
                </div>
                <div className="nav_list_items_container" id="navbar-default">
                    <ul className="nav_list_items">
                        <li>
                            <Link to="/" className="" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Services</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    {isLoggedIn ?
                        (<button className="logout-button" role="button" onClick={() => setIsLoggedIn(false)}>Log Out</button>) :
                        (<button className="login-button" role="button" onClick={() => setIsLoggedIn(true)} >Log In</button>)
                    }
                </div>
            </div>
            <div className="nav-heading">
                <h1>THE FOOD VILLA</h1>
            </div>
        </nav>
    </>)
}

export default Header;


