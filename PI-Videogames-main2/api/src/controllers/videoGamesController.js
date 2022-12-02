const axios = require("axios");
const {Videogames, Genres} = require('../db.js'); //Importar los modelos



//La api manda la info en un propiedad results.
const getApiGames = async ()=>{
    const apiUrl1 = await axios.get("https://api.rawg.io/api/games?key=66e2edd82ef446dbbaef21f6eb708876");
    const apiUrl2 = await axios.get("https://api.rawg.io/api/games?key=66e2edd82ef446dbbaef21f6eb708876&page=2");
    const apiUrl3 = await axios.get("https://api.rawg.io/api/games?key=66e2edd82ef446dbbaef21f6eb708876&page=3");
    const apiUrl4 = await axios.get("https://api.rawg.io/api/games?key=66e2edd82ef446dbbaef21f6eb708876&page=4");
    const apiUrl5 = await axios.get("https://api.rawg.io/api/games?key=66e2edd82ef446dbbaef21f6eb708876&page=5");
    
    const apiUrl = apiUrl1.data.results.concat(apiUrl2.data.results)
                                        .concat(apiUrl3.data.results)
                                        .concat(apiUrl4.data.results)
                                        .concat(apiUrl5.data.results)


    
    const apiData = await apiUrl.map(game=>{
        return {
            id: game.id,
            name: game.name,
            description: game.description,
            released: game.released,
            rating: game.rating,
            genres: game.genres.map(genre=>genre.name),
            platforms: game.platforms.map(platform=>platform.platform.name),
            image: game. background_image,
        }
    })

    return apiData;
}

const getDbGames = async ()=>{
    return await Videogames.findAll({
        include:{
            model: Genres,
            attribute: ['name'],
            through:{
                attributes:[],
            }
        }
    })
}

const getAllGames = async ()=>{
    const apiGames = await getApiGames();
    const dbGames = await getDbGames();

    const allGames = apiGames.concat(dbGames);
    return allGames;
}


const createGame = async (name, description, released, rating, genres, platforms)=>{
    const newGame = await Videogames.create({name, description, released, rating, platforms});
    const genreDb = await Genres.findAll({where:{name: genres}});
    newGame.addGenres(genreDb);
    return newGame;
}


module.exports = {
    getApiGames,
    getDbGames,
    getAllGames,
    createGame,
}
