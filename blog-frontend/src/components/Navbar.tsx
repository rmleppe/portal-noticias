import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

function Navbar() {
    const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <header>
            <div className="container-fluid position-relative no-side-padding">
                <span className="logo">
                {user && user.picture && <img src={user.picture} alt="My Avatar" />}
                {!user && <img src={'https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png'} alt="My Avatar" />}
                </span>

                <div className="menu-nav-icon" data-nav-menu="#main-menu">
                    <i className="ion-navicon" />
                </div>

                <ul className="main-menu visible-on-click" id="main-menu">
                    <li><Link className={"nav-link"} to={"/"}> Portal Noticias </Link></li>
                    
                    <li><Link className={"nav-link"} to={"/"}> Home </Link></li>
                    {isAuthenticated && (
                    <li><Link className={"nav-link"} to={"/create"}>Crear Post</Link></li>
                    )}
                </ul>
            </div>
            <li>
                    <Link className={"nav-link"} to={"/"}>
                        {!isLoading && !user && (
                            <>
                                <button className="btn btn-dark" onClick={loginWithRedirect}>
                                   Login
                                </button>
                            </>
                        )}

                        {!isLoading && user && (
                            <>
                                <div>
                                    <label className="mr-2">{user.name}</label>
                                    <button className="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin })}>
                                       Cerrar sesión
                                    </button>
                                </div>
                            </>
                        )}
                    </Link>
                    </li>
        </header>
    );
}

export default Navbar;