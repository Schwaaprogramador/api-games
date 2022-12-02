const { Router } = require('express');
const genresRouter = require('./GenresRouter');
const videoGamesRouter = require('./VideoGamesRouter');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoGamesRouter);
router.use('/genres', genresRouter);

module.exports = router;
