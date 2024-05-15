import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';
import DisplayColors from './components/DisplayColors';
import Footer from './components/Footer';

function App() {
  const [list, setList] = useState(new Values('blue').all(50)); {/* When the app inicializes, set the colors */}
console.log(list);

  return (
    <div className="App">
		<FormColor  setList={setList}/>
      <DisplayColors  list={list}/>
	  <Footer />
	</div>
  )
}

export default App
