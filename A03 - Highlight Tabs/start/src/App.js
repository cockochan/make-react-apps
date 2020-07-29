import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup')
  return (
    <div className="app">

        <div className="viewport">{markdown}</div>
     
        </div>
  );
}

