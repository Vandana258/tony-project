import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Login from './components/Login/Login.js';
import PrivateRoutes from './components/Routes/PrivateRoutes/PrivateRoutes.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Grid className='app'>
      <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                {/* <Route element={<Home/>} path="/" exact/>
                <Route element={<Products/>} path="/products"/> */}
            </Route>
            <Route element={<Login/>} path="/Login"/>
            <Route element={<Login/>} path='/'/>
          </Routes>
      </Router>
   </Grid>
  );
}

export default App;
