import React, {Fragment} from 'react';
import './skills.css';


function Skills() {

    const skills = [
        {
            img: 'logo_bootstrap.png',
            id: 1
    }, {
        img: 'logo_babel.png',
        id: 2
    }, {
        img: 'logo_css3.png',
        id:3 
    }, {
        img: 'logo_express.png',
        id:4
    }, {
        img: 'logo_javascript.png',
        id:5
    }, {
        img: 'logo_mongodb.png',
        id:6
    }, { 
        img: 'logo_mysql.png',
        id:7
    }, {
        img: 'logo_node.png',
        id:8
    }, {
        img: 'logo_react.png',
        id:9
    }, {
        img: 'logo_vscode.png',
        id:10
    }
];


    return(
        <Fragment>
            <div className="container my-5 pb-5">
                <div className="row justify-content-evenly">
                    {skills.map( skill => (
                        <div key={skill.id} className="d-flex shadow-lg rounded img-fluid rounded border border-secondary rounded-circle  col-2 m-3 p-1">
                            <img src={'skills/' + skill.img} alt={skill.img} className="skill rounded rounded-pill align-self-center justify-content-center about img-fluid"></img>
                        </div>
                    ) )}
                </div>
            </div>
        </Fragment>
    );
};

export default Skills