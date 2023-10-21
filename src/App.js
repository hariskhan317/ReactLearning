import './App.css'; 
import {Textinput} from './component/textInput'
import { useState } from 'react'; 

function App() {
  const [showText, setShowText] = useState('')
  const handleText = (()=>{
    setShowText(!showText)
  }) 
  return (
    <div className="App">
        <button onClick={handleText}>Show text</button>
        <div>
          {showText && <Textinput />}
        </div>
    </div>
  );
}

export default App;
