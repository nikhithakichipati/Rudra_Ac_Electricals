import React, { useState,useEffect } from "react";
import logo from '../Images/logo.png';
import footerlogo from '../Images/footerlogo.png';
import { HashLink as Link } from "react-router-hash-link";
import './Style.css';

const Header =()=>{
    const [scrolled,setScreolled]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setScreolled(window.scrollY>50);
        };
        window.addEventListener('scroll',handleScroll);
        return()=>window.removeEventListener('scroll',handleScroll);

    },[]);
    return(
        <header className={`header-main fixed-top ${scrolled ? 'scrolled':''}`}>
            <div className="container d-flex justify-content-between align-items-center py-3">
                <img src={scrolled ? logo : footerlogo} alt="Rudra logo" className="logo" style={{ paddingLeft:'10px', width: '100px',height:'auto' ,transform:'scale(1.3)',transformOrgin:'left center'}} />
                <nav className="d-none text-white fs-5 d-md-flex gap-4">
                    <Link  smooth to="/#home" className="nav-link">Home</Link>
                    <Link smooth to="/#services" className="nav-link">Services</Link>
                    <Link  smooth to="/#team" className="nav-link">Team</Link>
                    <Link  smooth to="/#testimonials" className="nav-link">Testimonials</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    
                </nav>
                
                

            </div>
        </header> 
    )
}

export default Header;