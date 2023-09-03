import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [printData, setPrintData] = useState("");
  const [error, setError] = useState("")
  const [printData2, setPrintData2] = useState("");

  const fetchData = async () =>{
   const url = "https://official-joke-api.appspot.com/random_joke";
   const options = {
    method: "GET",
   }
   try{
    const response = await fetch(url, options)
    const data = await response.json();
    setPrintData(data.setup);
    setPrintData2(data.punchline);
   }catch (error){
    console.log(error);
    setError("Something went wrong !")
   }

  }

  useEffect(() =>{
   fetchData();

  }, [])

  return(
    <div className='App'>
      <h1>Ninja Joker !</h1>
      <div className="Emoji"></div>
      {error && <p>{error}</p>}
      {!printData && !printData2 && <p>Loading...</p>}
      <h1>{printData}</h1>
      <h1>{printData2}</h1>
      <button onClick={fetchData}>Fetch Jokes !</button>
    </div>
  )
}


export default App;
