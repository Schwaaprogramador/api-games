import React from "react";
import NavBar from "../NavBar/NavBar";
import {useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { getGames, getGenres } from "../../redux/actions";
import Game from "./Game/Game.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import FilterCreated from "./FilterCreated/FilterCreated.jsx";
import  {Paginado}  from "./Paginado/Paginado.jsx";
import FilterGenres from "./FilterGenres/FilterGenres";
import OrderRating from "./OrderRating/OrderRating";
import OrderName from "./OrderName/OrderAsc";
import styled from "./Home.module.css";

const Home = ()=>{

   //--- estado globlal y dispatch
    const dispatch = useDispatch();
    const games = useSelector(state => state.games);

   
    //---PAGINADO---
    const [ currentPage, setCurrentPage] = useState(1);
    const [ gamesPerPage ] = useState(15);
    const lastGamePage = currentPage*gamesPerPage;
    const firtGamePage = lastGamePage - gamesPerPage;
    const currentGames = games.slice(firtGamePage, lastGamePage);

    const paginado = (pageNumber)=>{
        
        setCurrentPage(pageNumber)
        
    };
   
    
    //-- Al renderizar dispachar una action para que se llenen los estados.
    
    useEffect(()=>{
        dispatch(getGames());
        dispatch(getGenres());
    },[dispatch]);

    

    

    //--- render del componente
    return (<>

            <NavBar/>
            <div className={styled.filters}>
                
                <SearchBar paginado={paginado}/>
                <FilterCreated/>
                <FilterGenres/>
                <OrderRating paginado={paginado}/>
                <OrderName paginado={paginado}/>
                
            </div>
                    <Paginado
                    gamesPerPage={gamesPerPage}
                    games={games.length}
                    paginado={paginado}
                    />
            
           
                
         

            <div className={styled.games}>
                
                {typeof games === 'string'? <h1>No existing Games</h1> : currentGames.length > 0 ? 
                
                currentGames.map(game=> <Game
                                
                                id={game.id}
                                name={game.name}
                                description={game.description}
                                image={game.image}
                                released={game.released}
                                rating={game.rating}
                                platforms={game.platforms}
                                genres={game.genres}
                                key={game.id}
                                />)

                        : <h1>Video Games Loading</h1>
                }
                
            </div>

            
        
            </>)
};

export default Home;