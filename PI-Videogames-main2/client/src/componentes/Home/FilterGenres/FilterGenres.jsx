import React, { useState } from "react";
import { filterGenres, getGames } from '../../../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";

const FilterGenres = ()=>{

    const dispatch = useDispatch();
    const genres = useSelector((state)=> state.genres);
    const [render, setRender] = useState(0)
    
    const filterByGenres = (evento)=>{
        if(evento.target.value==='All') dispatch(getGames());
        console.log('Genero dispachado: '+evento.target.value)
        dispatch(filterGenres(evento.target.value));
        setRender(render+1)
        
    }

    return(<>
            <div>
                <b> Genres: </b> 
                <select onChange={evento=>filterByGenres(evento)}>

                        <option value='All'>All</option>
                        {genres.map(genre=><option key={genre} value={genre}>{genre}</option>)}

                    </select>
            </div>
            
            </>)
}

export default FilterGenres;