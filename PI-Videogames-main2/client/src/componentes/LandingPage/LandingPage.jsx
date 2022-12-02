//IMPORTACIONES
import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./LandingPage.module.css";




//COMPONENTE
const LandingPage = ()=>{
        
    return (
            <div className={styles.container}>

                
                <div><h1 className={styles.h1}> Daniel Toro <span className={styles.span}>Api Video Games</span>  </h1></div>
                
                <div>  <NavLink to='/home' className={styles.botonIngreso}>LET'S GO</NavLink></div>
                  
                 
                    
            </div>
            
            )
};




//EXPORT
export default LandingPage;