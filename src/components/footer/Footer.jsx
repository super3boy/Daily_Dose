import React from 'react';
import './Footer.css';
import { Button } from './../button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Join the Adventure newsletter to receive our best articles
                    </p>
                    <p className="footer-subscription-text">
                        You can unsubscribe at any time.
                    </p>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className='footer-link-items'>
                            <Link to="/"><h2>About Us</h2></Link>
                        </div>
                        <div className='footer-link-items'>
                            <Link to="/"><h2>Contact Us</h2></Link>
                        </div>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to="/" className="social-logo">
                                Daily Dose ❄
                            </Link>
                        </div>
                        <small className="website-rights">Daily Dose © 2021</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook" to="/" target="_blank" aria-label='Facebook'>
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="social-icon-link instagram" to="/" target="_blank" aria-label='Instagram'>
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer
