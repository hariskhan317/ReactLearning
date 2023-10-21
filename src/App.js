import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [apiData, setApiData] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setApiData(res.data[0].excuse);
    });
  };


  // useEffect(() => {
  //   fetchData();
  // }, []); // Provide an empty dependency array to run the effect once after the initial render.

  return (
    <div className="App">
      <button onClick={()=>fetchData("family")}>Family</button>
      <button onClick={()=>fetchData("office")}>Office</button>
      <button onClick={()=>fetchData("children")}>Children</button>
      {/* Show data */}
      <div>
        Data: {apiData}
      </div>
    </div>
  );
}

export default App;
