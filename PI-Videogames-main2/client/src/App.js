
import LandingPage from './componentes/LandingPage/LandingPage.jsx';
import Home from './componentes/Home/Home.jsx';
import { Route } from 'react-router-dom';
import NewGame from './componentes/NewGame/NewGame';
import GameDetail from './componentes/GameDetail/GameDetail';



function App() {
  return (
          
          <div>
    
            <Route exact path="/" >
              <LandingPage/>
            </Route>

            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/newgame">
              <NewGame/>
            </Route>

            {/* <Route path="/gamedetail">
              <GameDetail/>
            </Route> */}

            <Route path="/gamedetail/:id"  component={GameDetail}/>

            

            {/* Route component recibe automaticamente el id */}
            {/* Al route component no se le pueden pasar props, tiene un match por default */}
            

          </div>
    
    
    
  );
}

export default App;
