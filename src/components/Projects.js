import React from 'react';
import PROJECTS from '../data/projects';

const Project = props =>{
        const { title, image, description, link}= props.project;
        return (
            <div style={{ width:300, margin:10}}>
                <h3>{title}</h3>
                <img src={image} alt ='profile' style={{width:200, height:120}} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }


const Projects= () =>(
            <div>
                <h2>Highlighted Projects</h2>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    {
                        PROJECTS.map(PROJECT=>{
                            return (
                                <Project key={PROJECT.id} project={PROJECT}/>
                            )
                        })
                    }
                </div>
            </div>
)


export default Projects;