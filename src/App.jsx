import { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';
function App() {
  const [text,setText] = useState('');
  return (
    <main>
      <Editor text = { text } setText = { setText }/>
      <Preview text={ text }/>
    </main>
  )
}

export default App
