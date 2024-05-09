import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';

function App() {
  const [list] = useState(new Values('red').all(10));

  console.log(list);

  return (
    <div className="App">
      <h2>test component</h2>
	  <FormColor />
	</div>
  )
}

export default App
