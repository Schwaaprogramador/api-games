import React from "react";
import styled from "./Paginado.module.css";



//--Este componente renderiza los Numeritos

export function Paginado(props){
    
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(props.games/props.gamesPerPage); i++) {
        pageNumbers.push(i)
        
    }
    
    

    const paginadoClick =  (evento)=>{
        
         props.paginado(evento.target.value);
        
        
    }

    

    return (<>
            
                <div className={styled.container}>

                {pageNumbers.map(number =>

                    <button key= {number} value={number} onClick={paginadoClick} >{number}</button>
                    )}




                </div>
                    
                
                
                
           
    
    
    
            </>
      
    )
}