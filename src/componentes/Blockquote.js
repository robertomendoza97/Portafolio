import React, {Fragment} from 'react';
import Imagen from './Imagen';


function Blockquote() {
    return(
        <Fragment>
            <div className="container-fluid p-5">
                <div className="pe-lg-5 shadow row text-light border border-light p-3 rounded-3" style={{backgroundColor: '#3c3c3c'}}>
                    <div className="col-lg-4 col-md-12 my-3">
                        <Imagen/>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <blockquote className="blockquote">
                            <h1 className="text-center text-light mt-4">ROBERTO MENDOZA</h1>
                            <p className="mt-3 text-center">Soy un programador de 24 años de edad, autodidacta! Desde que descubrí la programación me he hecho consiente de un mundo que antes ni siquiera imaginaba y ahora es mi día a día, me apasiona aprender cosas nuevas y superar mis propios limites! Además de programar me gusta el futbol, compartir con mis amigos y viajar a conocer nuevos lugares!</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </Fragment> 
    );
};

export default Blockquote;