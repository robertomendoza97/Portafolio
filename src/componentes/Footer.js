import React from 'react';


function Footer() {
    
    return(
        <footer className="footer p-3 bg-dark">
            <div className="container text-light text-center">
                <figure className="text-center ">
                    <blockquote className="blockquote h1 text-light">
                        <q><em>¡El futuro pertenece a aquellos que creen en la belleza de sus sueños!</em></q>
                    </blockquote>
                    <figcaption className="blockquote-footer mt-1">
                        <cite title="Source Title">Eleanor Roosevelt</cite>
                    </figcaption>
                </figure>
                <p className="text-light pt-3 lead">Diseñado y desarrollado por: <a href="#contact" className="text-light text-decoration-underline">ROBERTO E. MENDOZA C.</a></p>
            </div>
        </footer>
    );
};

export default Footer;