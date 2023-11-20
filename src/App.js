import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios, { Axios } from 'axios';

function App() {
  const [name,setName]=useState()
  const [pass,setPass]=useState()
  const clicke=()=>{
    axios.post("http://localhost:8000/login",{
      user:name,
      pass:pass
    }).then((res)=>{
      console.log(res)
      setName("")
      setPass("")
    })
  }
  return (
    <div className="App">
      <header className="App-header">
       Usernamse: <input type='text' name='name' value={name} onChange={((e)=>setName(e.target.value))} /> <br/>
        Password: <input type='password' name="password" value={pass} onChange={((e)=>setPass(e.target.value))} /><br/>
        <button type='button' onClick={clicke}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
