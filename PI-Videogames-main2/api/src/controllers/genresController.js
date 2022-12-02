const { Genres } = require('../models/Genres.js');
const axios = require('axios');

const getApiGenres = async ()=>{
    const genresApi = await axios.get('https://api.rawg.io/api/genres?key=66e2edd82ef446dbbaef21f6eb708876');
    const genres = genresApi.data.results.map(genre=>genre.name);
    return genres;

    // genres.map( genres => { Genres.findOrCreate(
    //                             { where:{ name: genres}
    //                         })
    //                         });
    // return await Genres.findAll();
   
}

module.exports = getApiGenres;