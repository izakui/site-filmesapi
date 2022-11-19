import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Filme from './pages/filmes';
import Favoritos from './pages/Favoritos';
import Error from './pages/Erro';

import Header from './components/Hearder';

function RoutesApp(){
    return(
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/filme/:id" element={ <Filme/> } />
          <Route path="/favoritos" element={ <Favoritos/> } />  

        <Route path="*" element={ <Error/> } />           
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default RoutesApp;