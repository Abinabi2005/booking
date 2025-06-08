import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../components/Navbar.css';
import { NavLink } from "react-router-dom";


function Navbar() {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(prev => !prev);
    };

    return (
        <header>
            <h2>Booking.com</h2>

            {/* Show only if nav is closed */}
            {!isNavOpen && (
                <button className="nav-btn nav-open-btn" onClick={toggleNavbar}>
                    <FaBars />
                </button>
            )}

            <nav ref={navRef}>
                <NavLink to="/Home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Stays</NavLink>
                <NavLink to="/Flight" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Flight</NavLink>
                <NavLink to="/Hotel" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Hotel</NavLink>
                <a href="/CarRental" onClick={toggleNavbar}>Car Rental</a>
                <a href="/Attractions" onClick={toggleNavbar}>Attractions</a>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>

                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-btn">Search</button>
                </div>

                {/* Close icon only shown when nav is open */}
                <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
