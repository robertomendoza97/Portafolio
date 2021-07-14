import React from 'react';
import imagen from '../portada.jpg';


function Header() {
    

    return(
        <header className="" style={{
            backgroundImage: `url(${imagen})`,
            backgroundRepeat: 'no repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '100vh',
            height: '100vh',
            backgroundAttachment: 'fixed',
        }} id="header-nav">
            <nav className="navbar navbar-expand-lg navbar-light border-bottom border-light border-5 bg-dark fixed-top">
                <div className="container-fluid mx-4 g-0">
                    <a className="navbar-brand text-light lead border p-2" href="/">MI PORTAFOLIO</a>
                    <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-light"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link text-light mx-lg-0 mx-xl-3" aria-current="page" href="#header-nav">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light mx-lg-0 mx-xl-3" href="#about-me">Sobre mi</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light mx-lg-0 mx-xl-3" href="#proyects">Proyectos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light mx-lg-0 mx-xl-3" href="#contact">Contacto</a>
                            </li>
                        </ul>
                        <div id="redes" className="d-flex justify-content-evenly">
                            <a href="https://www.facebook.com/robertico.mendoza.7" target="_blank" rel="noreferrer" className="nav-link text-light display-6 mx-3"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/robertomend97/?igshid=1qptbkpl2nlmn" target="_blank" rel="noreferrer" className="nav-link text-light display-6 mx-3"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/roberto-mendoza-89bb34206" target="_blank" rel="noreferrer" className="nav-link text-light display-6 mx-3"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container d-flex flex-column h-100 text-center align-content-center justify-content-center">
                <h1 className="text-uppercase display-1 text-light mt-5 pt-5">hola mundo</h1>
                <h3 className="fs-1 text-light mt-3">BIENVENIDOS</h3>
                <hr className="text-light"/>
                <p className="text-light mt-3 fs-4">Este es mi portafolio web, aquí podrás encontrar información sobre mí, como cuales son las tecnologías que domino y algunos otros proyectos que he realizado, espero que sea de tu agrado y si es así puedes ponerte en contacto conmigo en la cajita del fondo o a través de mis redes sociales!   
                </p>
            </div>
        </header>
    );
};

export default Header;
