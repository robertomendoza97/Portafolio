import React, {Fragment} from 'react';
import './proyects.css';


function Proyects() {
    
    const proyectos = [
        {
            img: 'proyecto-citas.png',
            id: 1,
            title: 'Administrador de citas de veterinaria',
            description: 'En este proyecto se lleva un registro de las citas programadas de una veterinaria. Podras editar los datos si anotaste algo mal o eliminar la cita si asi lo deseas!',
            link: 'https://jolly-kilby-81ce79.netlify.app/'
        },
        {
            img: 'proyecto-autos.png',
            id: 2,
            title: 'Cotizador de seguro de autos',
            description: 'Este proyecto te permite calcular el precio del seguro de tu vehiculo! Selecciona tu tipo de seguro, la marca, el año y cotiza tu seguro',
            link: 'https://musing-kirch-28d9d8.netlify.app/'
        },
        {
            img: 'proyecto-prestamos.png',
            id: 3,
            title: 'Cotizador de prestamos',
            description: 'Este fue mi primer proyecto con ReactJS, validando campos y usando componentes con variables y hooks',
            link: 'https://amazing-noether-af728b.netlify.app/'
        },
        {
            img: 'proyecto-gastosemanal.png',
            id: 4,
            title: 'Administrador de presupuesto',
            description: 'En este proyecto podras llevar un registro de tus gastos, ingresando un presupuesto inicial iras anotando en que has gastado el dinero y sabras el restante de tu presupuesto.',
            link: 'https://dreamy-goodall-1c376f.netlify.app/'
        },
        {
            img: 'proyecto-pixabay.png',
            id: 5,
            title: 'Buscador de imagenes',
            description: 'Este proyecto Consulta la api de pixabay y te muestra el resultado de tu busqueda de imagenes',
            link: 'https://frosty-nobel-bd86a3.netlify.app/'
        },
        {
            img: 'proyecto-cmr.png',
            id: 6,
            title: 'Administrador de clientes',
            description: 'Este proyecto te permite llevar un registro de tus clientes de manera organizada, podras crear nuevos clientes, actualizarlos o borrarlos si lo deseas.',
            link: 'https://naughty-hawking-c02d28.netlify.app/'
        },
        {
            img: 'proyecto-bitcoin.png',
            id: 7,
            title: 'Cotizador de criptomonedas',
            description: 'Con este proyecto puedes consultar cual es el precio actual de alguna criptomoneda, puedes seleccionar en que moneda quieres ver el precio.',
            link: 'https://nervous-kalam-4e5e65.netlify.app/'
        },
    ];

    return(
        <Fragment>
            <div className="container text-center my-5 g-0" id="proyects">
                <h2 className="text-uppercase display-4 mt-5 pt-3">Algunos proyectos</h2>
                <hr/>
                <div className="row justify-content-evenly">                
                        {proyectos.map(proyecto => (
                            <div className="col-lg-3 col-md-6 col-sm-12 mt-4" key={proyecto.id}>
                                <div className="card mb-5 shadow overflow-auto" style={{height: '30rem'}}>
                                    <img src={'skills/' + proyecto.img} className="card-img-top" alt={proyecto.img} />
                                    <div className="card-body">
                                        <h4 className="card-title p-2">{proyecto.title}</h4>
                                        <hr></hr>
                                        <p className="card-text">{proyecto.description}</p>
                                        <a href={proyecto.link} target="_blank" rel="noreferrer" className="btn btn-outline-dark">VAMOS</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Proyects;
