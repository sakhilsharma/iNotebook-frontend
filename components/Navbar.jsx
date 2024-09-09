import React from 'react';
import { useLocation, Link } from 'react-router-dom';
export default function Navbar() {
    let location = useLocation();
    React.useEffect(() => {
        console.log(location);
    }, [location]); //provide location related information for currunt object/url
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex w-[100vw]">
            <div className='  position-relative ' >
                <div className="container-fluid w-[100] d-flex">
                    <a className="navbar-brand" >iNotebook</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Home"? "active":""}`} aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/About"? "active":""}`} to="/About">About</Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div >
        </nav>
    )
}