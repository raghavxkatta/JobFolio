import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import {app} from './firebase'
import {getDatabase,ref,set} from 'firebase/database'

import Hero from './components/Hero';

const db=getDatabase(app)
function App(){
  /* Yeh data put karega */
  const putData=()=>{
    set(ref(db,'users/raghav'),{
      id:1,
      name:'Raghav',
      age:20,
    })
    console.log('Data put successfully')
  }
  return(
    <BrowserRouter>
    <Header/>
    <Hero/>
    <h1>Firebase React App</h1>
    <button className='border cursor-pointer' onClick={putData}>Put Data</button>
    </BrowserRouter>
  )}
export default App;