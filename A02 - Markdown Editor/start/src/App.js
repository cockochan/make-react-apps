
import React, {useState} from 'react';
import './App.css';
import marked from "marked"
export default function App() {
  const [markdown, setMarkdown] = useState('# sup')
  function handleChange (e){
    setMarkdown(e.target.value)
  }
  return (
    <div className="app">

        <textarea className="viewport" value={markdown} onChange={handleChange}/>
  <div className ="preview" 
  dangerouslySetInnerHTML={
    {__html: marked(markdown)}
    }/>
     
        </div>
  );
}
