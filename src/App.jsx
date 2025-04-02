import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SignUp from './components/Signup';
import Signin from './components/Signin';

function App(){
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={
      <>
      <Hero/>
      
      </>
    }/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )}
export default App;