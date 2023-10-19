import './App.css';
import { useState } from 'react';
 
function App() {
  // Age
  // const [age, setAge] = useState(0);
  // const increaseAge =(()=>{
  //   const newAge = age +1 
  //   console.log(age)
  //   setAge(newAge);
  // });

  // input Value

  // const [InputValue, setInputValue] = useState('')

  // const inputHande =((event)=>{
  //   setInputValue(event.target.value)
  // })

  const [counter , setCounter] = useState(0);

  const increaseHandle = (() =>{
    setCounter(counter + 1 )
  })

  const decreaseHandle = (() =>{
    setCounter(counter - 1 )
  })

  const zeroHandle = (() =>{ 
    setCounter(0)
  }) 


  return (
    <div className="App">
      <header className="App-header">
        
        {/* Age
          <button onClick={increaseAge}>dasdasdasd</button>
          <p>{age}</p> 
        */}

        {/* input */}
       {/* <input type='text'  onChange={inputHande}/>
       <p>{InputValue}</p> */}

       {/* Counter app */}
       <button onClick={increaseHandle}>Increase</button>
       <button onClick={decreaseHandle} disabled={counter <=0}>Decrease</button>
       <button onClick={zeroHandle}>Set Zero</button>

       <p>{counter}</p>
      </header>
    </div>
  );
}

export default App;
