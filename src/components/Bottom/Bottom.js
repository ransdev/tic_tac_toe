import React from 'react';
import './Bottom.css';
const Bottom = () => {

    return(
        <footer className="footer-black">
        <div className="container">
            <div className="row">
                <nav className="footer-nav">
                    <ul>
                    </ul>
                </nav>
                <div className="credits ml-auto w-100 justify-content-center">
                    <span className="copyright" >
                        <p id="foot"> </p>
                    </span>
                    <span className="copyright" id="copy" >
                        © 2018, made with <i className="fa fa-heart heart"></i> by <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer"> Creative Tim </a>
                    </span>
                </div>
            </div>
        </div>
        </footer>
        );
}

export default Bottom;