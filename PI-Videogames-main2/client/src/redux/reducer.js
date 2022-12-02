import {
    GET_GAMES, 
    GET_GAMES_BY_NAME, 
    FILTER_CREATED, 
    GET_GAME_DETAIL, 
    POST_GAME, 
    GET_GENRES,
    FILTER_GENRES,
    ORDER_RATING,
    ORDER_NAME,
   
    } from "./actions.js";

    

const initialState = {
    games: [],
    gamesFilter: [],
    gameDetail:[],
    genres:[],
    paginado:[],
    
    
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case GET_GAMES:
            return {...state, games:action.payload, gamesFilter:action.payload}

        case GET_GAMES_BY_NAME:
            return {...state, games: action.payload, gamesFilter:action.payload}

        case GET_GAME_DETAIL:
            return {...state, gameDetail: action.payload}

        case POST_GAME:
            return {...state}

        case GET_GENRES:
            return {...state, genres: action.payload}

        case FILTER_CREATED:
            const games = state.games;
            const filterCreated = games.filter(game=>game.createdInDb)
            if(action.payload === 'Created') return {...state, games: filterCreated}
            return {...state}

        case FILTER_GENRES:
            const games2 = state.gamesFilter;
            const filterGenres = games2.filter(game=>game.genres.includes(action.payload))
            return {...state, games: filterGenres}
        
        case ORDER_RATING:
            if(action.payload==='Asc'){

                const games3 = state.games;
                console.log(games3)
                const orderedGames = games3.sort((a, b)=>a.rating - b.rating)
                return { ...state, games: orderedGames}

            } else if (action.payload==='Desc'){

                const game4 = state.games;
                const OrderedGames1 = game4.sort((a, b)=>b.rating - a.rating)
                return {...state, games: OrderedGames1}

            } else return {...state}
        
        case ORDER_NAME:
            if(action.payload ==='Asc'){

                const games5 = state.games;
                const orderedGamesName = games5.sort((a, b)=>{
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(b.name > a.name) {
                        return -1;
                    }
                    return 0;
                });
                console.log(orderedGamesName)
                return { ...state, games: orderedGamesName}

            } else if (action.payload ==='Desc'){

                const games6 = state.games;
                const orderedGamesName1 = games6.sort((a, b)=>{
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                return {...state, games: orderedGamesName1}
                
            } else return {...state}

        
        default:
            return {...state};
    }
}


export default rootReducer;