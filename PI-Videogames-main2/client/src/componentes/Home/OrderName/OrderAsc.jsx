import React, {useState} from "react";
import { orderName, getGames } from '../../../redux/actions.js';
import { useDispatch } from "react-redux";

const OrderName = (props)=>{

    const dispatch = useDispatch();
    const [render, setRender] = useState(0)
   

    const orderByName = (evento)=>{
        if(evento.target.value==='Asc') {

            dispatch(orderName(evento.target.value));
            props.paginado(1);
            setRender(render+1);    

        } else if (evento.target.value==='All') {
            dispatch(getGames())
            setRender(render+1);

        } else if (evento.target.value==='Desc') {

            dispatch(orderName(evento.target.value));
            props.paginado(1);
            setRender(render+1);
        };
        
        setRender(render+1);
       
        
    }

    return(<>
            <div>
                <b> Order by Name: </b> 
                <select onChange={evento => orderByName(evento)}>
                    <option value='All'>All</option>
                    <option value='Asc'>Asc</option>
                    <option value='Desc'>Desc</option>
                </select>
            </div>
            
            </>)
}

export default OrderName;