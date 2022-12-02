import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../redux/actions";
import { Link } from 'react-router-dom'
import NavBar from "../NavBar/NavBar";
import styled from "./GameDetail.module.css";


const GameDetail = (props)=>{
    console.log(props)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGameDetail(props.match.params.id))
    },[dispatch,props.match.params.id]);

    const gameDetail = useSelector(state => state.gameDetail);

    return (<>

            <NavBar/>

            <div className={styled.todo}>


                    { gameDetail.length > 0 ? 
                            <div className={styled.text}>

                                <img src={gameDetail[0].image} alt='videogame' className={styled.image}/>
                                <h1>Name: {gameDetail[0].name}</h1>
                                <h3>Released: {gameDetail[0].released}</h3>
                                <h3>Rating: {gameDetail[0].rating}</h3>
                                <h3>Genres: {gameDetail[0].genres}</h3>
                                <h3>Platforms: {gameDetail[0].platforms}</h3>
                                <div>
                                <Link to="/home"><button className={styled.icon}>BACK</button></Link>
                                </div>
                            </div>
                            
                            : <h1>Loading..</h1>
                
                    
                    }


                


                </div>
        
            </>)
};

export default GameDetail;