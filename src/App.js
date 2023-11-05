import './App.css';
import {useToggle} from './useToggle'
 
function App() {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Show" : "Hide"}
      </button>
      <div>
      {isVisible && <>my name is khan</>}
      </div>
    </div>
  );
}

export default App;
