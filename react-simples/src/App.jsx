import './App.css'
import {Routes, Route, Link} from 'react-router-dom'

import CallbackList from './Components/CallbackList/Index'
import Callback from "./Components/Callback/Index";
import MemoComponent from "./Components/Memo/Index";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/use-callback-list">useCallback</Link>
        <Link to="/use-callback">Callback</Link>
        <Link to="/use-memo">useMemo</Link>
        <Routes>
          <Route path="/use-callback-list" element={<CallbackList list={[{id: 1, text: "first"}, {id: 2, text: "second"}, {id: 3, text: "third"}]}/>}/>
          <Route path="/use-callback" element={<Callback text="test"/>}/>
          <Route path="/use-memo" element={<MemoComponent text="test"/>}/>
        </Routes>
      </header>
    </div>
  )
}

export default App
