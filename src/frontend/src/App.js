import {Route,Routes} from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ChartsPage from './pages/ChartsPage';
import HomePage from './pages/HomePage';
import MatchPage from './pages/MatchPage';
import RecordsPage from './pages/RecordsPage';



function App() {
  return (
    <div className="App">
    
        <Routes>
        <Route path="/home" element ={<HomePage />}> </Route>
      <Route path="/home/:teamName" element={<MatchPage />}></Route> 
      <Route path="/charts/:teamName" element = {<ChartsPage />}> </Route>
      </Routes>
     <AboutPage />
      <RecordsPage />
      
     
      


    </div>
  );
}

export default App;
