
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemDetail from './components/ItemDetail';
import { FavoriteProvider } from './context/FavoriteContext';


function App() {
  
  return (
    <FavoriteProvider>
          <div className="App container mt-5">
      
            <BrowserRouter>
              <NavBar />

              <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/productos/:id" element={<ItemDetail />}/>
              </Routes>
            </BrowserRouter>

          </div>
    </FavoriteProvider>

  );
}

export default App;
