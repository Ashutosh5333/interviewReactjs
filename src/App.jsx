import { useEffect, useRef, useState } from 'react'
import './App.css'
import Customform from './Components/Customform';
import CounterApp from './Components/FormMemo';

function App() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);
  
  return (
    <>

     <h1>  Hello  </h1>

      
      </>
  );
}

export default App;
