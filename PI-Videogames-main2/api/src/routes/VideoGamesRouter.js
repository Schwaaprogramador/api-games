const { Router } = require('express');
const { getAllGames, createGame } = require('../controllers/videoGamesController');


const videoGamesRouter = Router();

//http://localhost:3001/videogames?name=nombredeljuego
videoGamesRouter.get('/', async(request, response)=>{
    
    const name= request.query.name;
    const games = await getAllGames();

    if(name){
        
            const gameName = await games.filter(game=>game.name.toLowerCase().includes(name.toLowerCase()));

            if(gameName.length){
                return response.status(200).send(gameName);
            } else {
                return response.status(404).send('No existe video Juego con este nombre');
            }
            
            
       
    }

    response.status(200).send(games);
    })


//--------------
videoGamesRouter.get('/:id', async (request, response)=>{
    const id = request.params.id;
    const gamesId = await getAllGames();
    const idGame = await gamesId.filter(games=>games.id===parseInt(id));

    idGame.length ?
    response.status(200).send(idGame):
    response.status(
        
    ).send(`No existe game con el id: ${id}`)
    })

//-------------------

videoGamesRouter.post('/', async (request, response)=>{
    
    try {
        let { name, description, released, rating, genres, platforms } = request.body;
        const platformsString = platforms.toString();
        let newGame = createGame(name, description, released, rating, genres, platformsString);
        response.status(200).send('Game Created')
    } catch (error) {
        console.log(error)
        response.send(error)
    }
   
    })




module.exports = videoGamesRouter;
