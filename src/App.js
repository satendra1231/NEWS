
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Home from './pages/Home';

import View from './pages/View';
import PageNotFound from './pages/PageNotFound';
import Navbar from './component/Navbar';
import TopHeadline from './component/TopHeadline';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div style={{marginBottom:"80px"}}>
      <Navbar />
      </div>
        <Routes>
            <Route path='/' element={<Home/> }/>
          
            <Route path='/View' element={<View/> }/>
            <Route path='/topheadline' element={<TopHeadline/> }/>
            <Route path='/*'  element={<PageNotFound/>}/>
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
