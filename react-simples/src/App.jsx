import './App.css'
import {Switch, Route, Link} from 'react-router-dom';

import CallbackList from './Components/CallbackList'
import Callback from "./Components/Callback";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/use-callback-list">useCallback</Link>
        <Link to="/use-callback">Callback</Link>
        <Link to="/usememo">useMemo</Link>
        <Switch>
          <Route path="/use-callback-list"><CallbackList/></Route>
          <Route path="/use-callback"><Callback/></Route>
        </Switch>
      </header>
    </div>
  )
}

export default App
