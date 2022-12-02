const { Router } = require('express');
const getApiGenres = require('../controllers/genresController.js')

const genresRouter = Router();


genresRouter.get('/', async (request, response)=>{
    const genres = await getApiGenres();
    response.status(200).send(genres);
})

module.exports = genresRouter;

