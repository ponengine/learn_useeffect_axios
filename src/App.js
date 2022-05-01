import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';


function App() {

  const [data,setData] = useState([])
useEffect(() => {
  
 axios.get('https://5f6ca2b134d1ef0016d585ae.mockapi.io/data').then(data=>data.data).then(data=>

 setData(data));
}, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
