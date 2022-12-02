import React from "react";
import { filterCreated, getGames } from '../../../redux/actions.js';
import { useDispatch } from "react-redux";

const FilterCreated = ()=>{

    const dispatch = useDispatch();
   

    const filterByCreated = (evento)=>{
        if(evento.target.value==='Created') dispatch(filterCreated(evento.target.value));
        if(evento.target.value==='All') dispatch(getGames());
       
        
    }

    return(<>
            <div>
                <b> Created: </b> 
                <select onChange={evento => filterByCreated(evento)}>
                    <option value='All'>All</option>
                    <option value='Created'>Created</option>
                </select>
            </div>
            
            </>)
}

export default FilterCreated;