import React, {Fragment} from 'react';
import Blockquote from './Blockquote';
import Skills from './Skills';


function About() {

    // const animado = document.querySelectorAll('.animado');
    
    return(
        <Fragment>
            <div className="d-flex flex-column" style={{backgroundColor: '#515151'}} id="about-me">
                <Blockquote/>
                <div className="container mt-5">
                    <h1 className="text-light display-4 text-center text-uppercase">tecnologías</h1>
                    <hr className="text-light"/>
                </div>
                <Skills/>
            </div>
            <div className="w-100" style={{height: '2rem'}}/>

        </Fragment>
    );
};

export default About;