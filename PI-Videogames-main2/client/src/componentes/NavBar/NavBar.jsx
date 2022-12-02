import React from "react";

import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';


const NavBar = ()=>{

   

    return (<>

            
            <nav className={styles.container}>
            <h3>Video <span className={styles.span}>Games</span></h3>
            <div >
                <Link to='/home' className={styles.links}>Home</Link>
                <Link to='/newgame' className={styles.links}>New Game</Link>
                <Link to='/' className={styles.links}>Exit</Link>
            </div>


            </nav>
            
            </>)
};

export default NavBar;