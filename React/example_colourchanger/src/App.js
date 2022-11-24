import './App.css';
import Color from './Components/Color';
import Changebox from './Components/Changebox';
import { useState } from 'react';

function App() {
  const [color,setColor] =useState('')

  return (
    <main>
      <Changebox color={color}  />
      <Color
      color={color}
      setColor={setColor} 
      />
    </main>
  );
}

export default App;
