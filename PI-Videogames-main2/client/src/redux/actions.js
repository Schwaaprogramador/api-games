import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME';
export const FILTER_CREATED = 'FILTER_CREATED';
export const GET_GAME_DETAIL = 'GET_GAME_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const POST_GAME = 'POST_GAME';
export const FILTER_GENRES = 'FILTER_GENRES';
export const PAGE_RENDER = 'PAGE_RENDER';
export const ORDER_RATING = 'ORDER_RATING';
export const ORDER_NAME = 'ORDER_NAME';

//------------
export const getGames = ()=>{
    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/videogames");
        return dispatch({ type: GET_GAMES, payload: json.data});
    };
};


//-----------------
export const getGenres =()=>{
    return async function(dispatch){
        const genres = await axios.get('http://localhost:3001/genres');
        return dispatch({type: GET_GENRES, payload: genres.data})
    }
}



// //-------------
export const getGameDetail = (id)=>{
    return async function(dispatch){
         const detail = await axios.get(`http://localhost:3001/videogames/${id}`)
        // const detail = await axios.get(`https://api.rawg.io/api/games/${id}?key=66e2edd82ef446dbbaef21f6eb708876`)
        return dispatch({ type: GET_GAME_DETAIL, payload: detail.data});
    };
};



// //--------
export const postGame = (payload)=>{
    return async function(){
        console.log(payload);
        const createdGame = await axios.post('http://localhost:3001/videogames', payload);
        
        return createdGame;
    }
}



// //----------- Filtros -------
export const filterCreated= (select)=>{
    return {
        type: FILTER_CREATED,
        payload: select,
    }
};

export const filterGenres = (genre)=>{
    return {
        type: FILTER_GENRES,
        payload: genre,
    }
}


// //-------Busqueda---------------
 export function getGameByName(payload){
     return async function (dispatch){
        
        try {
            const gameName = await axios.get("http://localhost:3001/videogames?name=" + payload);
            return dispatch({
                type: GET_GAMES_BY_NAME,
                payload: gameName.data,
            })
        } catch(error) {
            console.log(error);
            console.log(error.response.data)
            if(error) return dispatch({
                type: GET_GAMES_BY_NAME,
                payload: error.response.data,
            })
        }
    }
}


//----------ORDER
export const orderRating = (rating)=> {
    
        return {
            type: ORDER_RATING,
            payload: rating
      }
    
}

//-------------
export const orderName = (payload)=> {
    
    return {
        type: ORDER_NAME,
        payload: payload,
  }

}





