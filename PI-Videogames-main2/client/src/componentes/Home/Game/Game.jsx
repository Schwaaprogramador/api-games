import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Game.module.css";


const Game = ({id, name,image, description, released, rating, platforms, genres})=>{

    return (<>
                
            <div className={styled.container}>
                <div>
                <NavLink className={styled.navlink} to={`/gamedetail/${id}`}><h1>{name}</h1></NavLink>
                
                {image? <img src={image} alt='videogame' className={styled.imagen}/> : <h3>{description}</h3>}

                </div>
                
                

                <div className={styled.text}>
                    
                    <h3> Released: {released}</h3>
                    <h3> Rating: {rating}</h3>
                    <h3> Platforms: {platforms}</h3>
                    <h3> Genres: {genres}</h3>
                   
                </div>
            </div>
            </>)
};

export default Game;