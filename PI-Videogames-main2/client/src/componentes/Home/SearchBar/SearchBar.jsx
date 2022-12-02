import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../../redux/actions";

const SearchBar = (props) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')//Estado Local

    //Enlazar el input con el estado local
    const handlerInputChange = (evento)=>{
        evento.preventDefault();
        setName(evento.target.value);
        dispatch(getGameByName(name))
        console.log(name)
    }

    //Dispachat una action para filtrar por name
    const handlerSubmit = (evento)=>{
        evento.preventDefault();
        dispatch(getGameByName(name))
        console.log('Search con este name: '+ name)
        props.paginado(1);
    }

    return (<>  
        <div>
            <input 
                type='text' 
                placeholder="Search Video Game" 
                onChange={(evento) => handlerInputChange(evento)}
                name='name'
                value={name}
                >
                </input>


            <button type='submit' onClick={(evento)=>handlerSubmit(evento)}> Search </button>

        </div>

                
            
            </>)
}

export default SearchBar;