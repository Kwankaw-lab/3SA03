import React from 'react';
import'./App.css';
import WordCard from './WordCard';

const word = "Hello Goodmorning my friend";

function App() {
 return (
 <div>
 {
 <WordCard value={word}/>
 }
 </div>
 );
}

export default App;