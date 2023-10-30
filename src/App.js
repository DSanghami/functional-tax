import logo from './logo.svg';

import './App.css';

import { useEffect, useState } from 'react';

 

function App() {

  const [firstname , setFirstName] = useState('Unkown');

  const [lastname , setLastName] = useState('Unkown');

  const [agree , setAgree] = useState(false);

 

  const updateFirstName = (event) =>

  {

    setFirstName(event.target.value)

    var t = document.getElementById("checkbox");

    if(event.target.value.length <= 5)

    {

      t.checked = false;

      setAgree(false);

    }

  }

 const updateLastName = (event) =>

  {

    setLastName(event.target.value)

    var t = document.getElementById("checkbox");

    if(event.target.value.length <= 5)

    {

      t.checked = false;

      setAgree(false);

    }

  }

  const enableDisable =(e) =>

  {

    setAgree(e.target.checked)

  }

 

  const isSaveValue = (e) =>

  {

    if(e.target.checked == true && firstname.length > 5 && lastname.length > 5)

    {

      setAgree(true);

 

    }

    else

    {

      e.target.checked = false;

      setAgree(false);

    }

   

  }

 

  return (

    <div className="App">

      <center>

      <form>

      Enter the Firstname

      <input type='text' value={firstname} onChange={updateFirstName}/><br/>

     

      Enter the Lastname

      <input type='text' value={lastname} onChange={updateLastName}  /><br/>

      <b>Your Name </b>{firstname}&nbsp;&nbsp;{lastname}<br />

      <input type='checkbox' id="checkbox" checked={agree} onChange={isSaveValue}/>Agree to Terms & Conditions<br/>

      {/* { //conditional rendering , A new feature in ReactJS

         agree ? <input type='button' value="Save" /> :  <input type='button' value="Save" disabled  />

      } */}

      <input type='button' value="Save" disabled={agree} />

      <br/>

     </form>

      </center>

     

    </div>

  );

}

export default App;