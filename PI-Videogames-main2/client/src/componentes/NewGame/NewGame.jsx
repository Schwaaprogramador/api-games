import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postGame } from "../../redux/actions";
import styled from "./NewGame.module.css";



const validation = (inputs)=>{
    let errors = {};

    if(!inputs.name){
        errors.name = 'Name Required'
    }
    if(!inputs.description){
        errors.description = 'Description Required'
    }
    if(!inputs.platforms){
        errors.platforms = 'Platforms Required'
    }

    return errors;
}




//name, description, released, rating, genres, plataforms - modelo de la db
//id, name, released, rating, platforms, genres
const NewGame = ()=>{

    const dispatch = useDispatch();
    const genres = useSelector((state)=> state.genres);

    useEffect(()=>{
        dispatch(getGenres())
        console.log('getGenres Ejecutado')
    }, [dispatch]);

    const [errors, setErrors] = useState({})
    console.log('Este es el estado errors : ' + !!errors)

    const [inputs, setInputs] = useState({
        name: '', 
        description: '', 
        released:"", 
        rating:"", 
        genres:[],
        platforms:[],
    });

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        
        dispatch(postGame(inputs));

        

        alert("Create Video Game Success");

        setInputs({
            name: '', 
            description: '',
            released:"", 
            rating:"", 
            genres:[],
            platforms:[],
        })

       
        
    }

    const handleInputs = (evento) => {
        console.log('Esto llega por evento.target: ' + evento.target.name)
        setInputs({
            
            ...inputs,
            [evento.target.name]: evento.target.value, 
        })
        setErrors(validation({
            ...inputs,
            [evento.target.name]: evento.target.value,
        }))
        
        console.log(inputs)
        console.log(errors)
    }

    const handleGenres = (evento) => {
        setInputs({
            ...inputs,
            genres: [...inputs.genres, evento.target.value]
        })
    }

    const handlePlatforms = (evento) => {
        setInputs({
            ...inputs,
            platforms: [...inputs.platforms, evento.target.value]
        })
    }
    

console.log(Object.keys(errors).length)
    //----- RENDER -----------------
    return (<>
            <NavBar/>
            <div className={styled.container}>
            <h1 className={styled.h1}>Create New Video Game</h1>
            <form className={styled.form}>
                <div>
                    <label>Name*:</label>
                    <input  className={styled.input}
                            type='text'
                            value={inputs.name}
                            name='name'
                            onChange={handleInputs}></input>

                    {errors.name && <p>{errors.name}</p>}
                </div>
                

                <div>
                    <label>Description*:</label>
                    <input  className={styled.input}
                            type='text'
                            value={inputs.description}
                            name='description'
                            onChange={handleInputs}></input>

                            {errors.description && <p>{errors.description}</p>}
                </div>

                <div>
                    <label>Released:</label>
                    <input  className={styled.input}
                            type='date'
                            value={inputs.released}
                            name='released'
                            onChange={handleInputs}></input>
                </div>



                <div>
                    <label>Rating: 1 - 5 </label>
                    <input  className={styled.input}
                            type='number'
                            max='5'
                            min='1'
                            value={inputs.rating}
                            name='rating'
                            onChange={handleInputs}></input>
                </div>


                <div>
                    <label>Genres:</label>
                    <select onChange={(evento)=>handleGenres(evento)}>
                        {genres.map(genre=><option key={genre}  value={genre}>{genre}</option>)}
                    </select>
                        {inputs.genres.length? inputs.genres.map(genre=><p value={genre}>{genre}</p>) : <p>select genres</p>}
                </div>


                <div>
                    <label>Platforms*:</label>
                    <select  onChange={evento => handlePlatforms(evento)}>
                        <option>PlayStation</option>
                        <option>PC</option>
                        <option>Xbox</option>
                        <option>Xbox One</option>
                        <option>Xbox 360 Store</option>
                        <option>Steam</option>
                        <option>PlayStation Store</option>
                        <option>Nintendo Store</option>
                    </select>
                    {inputs.platforms.length? inputs.platforms.map(platform=><p key={platform} value={platform}>{platform}</p>) : <p>Select Platform</p>}
                </div>


                <button 
                    type="submit"
                    disabled={Object.keys(errors).length > 0 || Object.keys(inputs).length == 0}
                    onClick={handleSubmit} 
                    >Create Video Game</button>
            </form>
            </div>
            </>)
};

export default NewGame;