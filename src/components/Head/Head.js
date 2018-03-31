import React from 'react';
const Head = () => {
	
	return(
		<nav className="navbar navbar-expand-md fixed-top navbar-transparent justify-content-center" color-on-scroll="500">
        <div className="container">
            <div className="navbar-translate">
                <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar"></span>
                    <span className="navbar-toggler-bar"></span>
                    <span className="navbar-toggler-bar"></span>
                </button>
                <a id="name" className="navbar-brand" href="/">Tic Tac Toe</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip noopener noreferrer" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" >
                            <i className="fa fa-twitter"></i>
                            <p className="d-lg-none">Twitter</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip noopener noreferrer" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                            <i className="btn-lg fa fa-facebook-square"></i>
                            <p className="d-lg-none">Facebook</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip noopener noreferrer" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                            <i className="fa fa-instagram"></i>
                            <p className="d-lg-none">Instagram</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip noopener noreferrer" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/CreativeTimOfficial/paper-kit" target="_blank">
                            <i className="btn-lg fa fa-github"></i>
                            <p className="d-lg-none">GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
		);
}


export default Head;