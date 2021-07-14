import React, {Fragment, useState}from 'react';
import Swal from 'sweetalert2';
import emailjs, { init } from 'emailjs-com';
init("user_8hs5g1xIjjDgMmvhm2uV6");

function Contact() {

    const [nombreInput, setNombre] = useState('');
    const [emailInput, setEmail] = useState('');
    const [comentarioInput, setComentario] = useState('');

    const validarForm = (e)=>{
        
        if(nombreInput.trim() === '' || comentarioInput === '' || emailInput.trim() === '') {

            Swal.fire({
                icon: 'error',
                title: 'Campo vacio',
                text: '¡Deberias de llenar todos los campos!'
              })

              return;
        };

        sendEmail(e);


        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Tu email ha sido enviado',
            showConfirmButton: false,
            timer: 1500
          });

        const formulario = document.querySelector('#formulario');
        formulario.reset();
    };

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ybwsb3e', 'template_dxfx7to', e.target , 'user_8hs5g1xIjjDgMmvhm2uV6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <Fragment>
            <div className="w-100" style={{height: '1rem'}}/>
            <h5 className="text-center mb-5 display-2" id="contact">Contacto</h5>
            <div className="container border border-dark mb-5 shadow-lg p-5">
                <form id="formulario" 
                    onSubmit={e=> {
                        e.preventDefault();
                        validarForm(e);
                    }} 
                    name="contacto">
                    <div className="mb-3">
                        <label htmlFor="#inputNombre" className="form-label">Nombre</label>
                        <input type="text" onChange={e=> {
                            setNombre(e.target.value)
                            }} name="nombre" className="form-control" id="inputNombre" placeholder="alison "/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="#inputEmail" className="form-label">Correo electronico</label>
                        <input type="email" name="email" onChange={e=> {
                            setEmail(e.target.value);
                        }} className="form-control" id="inputEmail" placeholder="ejemplo@correo.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="#textAreaINput" className="form-label">Comentario</label>
                        <textarea className="form-control" onChange={e=> {
                            setComentario(e.target.value);
                        }} name="comentario" id="textAreaINput" placeholder="algun comentario" rows="3"></textarea>
                    </div>
                    <button type="submit" className="d-block mt-5 mx-auto btn btn-dark">Enviar</button>
                </form>
            </div>
            <div className="w-100" style={{height: '4rem'}}/>
        </Fragment>
    );
};

export default Contact