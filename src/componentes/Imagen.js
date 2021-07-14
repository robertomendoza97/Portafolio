import React from 'react';


function Imagen() {
    return(
        // <div className="imagen rounded-circle mx-auto">
        <div className="text-center">
            <img src="perfil.jpg" style={{width: '220px', height: '220px'}} className="img-fluid border border-2 rounded rounded-circle" alt="lo que sea"></img>
        </div>
    );
};

export default Imagen;