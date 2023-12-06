import React from "react";
// import { BrowserRouter as Link } from 'react-router-dom';
import bannerImage from "../images/restauranfood.jpg"
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    const submitForm = (formData) => {
        navigate('/booking', { replace: true })

    }
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned Mediterrran resturant, focused on traditional receipes served with a modern twist.</p>
                    <button aria-label='On Click' onClick={submitForm}>Reserve Table</button>
                    {/* <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link> */}
                </div>

                <div className="banner-img">
                    <img src={bannerImage} alt='' />
                </div>
            </section>

        </header>
    );
}

export default Header; 