const Header = () => {

    return (<>
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo_img_container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfy-1v_MLOMDjTVOEPHJL6S7NTp1Fkz0yIA&s" className="logo" alt="Food Villa Logo" />
                </div>
                <div className="nav_list_items_container" id="navbar-default">
                    <ul className="nav_list_items">
                        <li>
                            <a href="/" className="" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/" className="">About</a>
                        </li>
                        <li>
                            <a href="/" className="">Services</a>
                        </li>
                        <li>
                            <a href="/" className="">Pricing</a>
                        </li>
                        <li>
                            <a href="/" className="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-heading">
                <h1>THE FOOD VILLA</h1>
            </div>
        </nav>
    </>)
}

export default Header;


