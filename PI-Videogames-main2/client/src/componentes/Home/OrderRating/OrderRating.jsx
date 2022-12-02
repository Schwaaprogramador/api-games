import React from "react";
import { orderRating, getGames } from '../../../redux/actions.js';
import { useDispatch } from "react-redux";

const OrderRating = (props)=>{

    const dispatch = useDispatch();
   

    const orderByRating = (evento)=>{

        if(evento.target.value === 'Asc') {
            dispatch(orderRating(evento.target.value));
            
            props.paginado(1);

        } else if (evento.target.value==='All') {
            dispatch(getGames())

        } else if (evento.target.value==='Desc') {
            dispatch(orderRating(evento.target.value));

            props.paginado(1);
        };
        
        
        props.paginado(1);
        
    }

    return(<>
            <div>
                <b> Order by Rating: </b> 
                <select onChange={evento => orderByRating(evento)}>
                    <option value='All'>All</option>
                    <option value='Asc'>Asc</option>
                    <option value='Desc'>Desc</option>
                </select>
            </div>
            
            </>)
}

export default OrderRating;