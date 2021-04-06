import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { useSelector } from "react-redux"

function App() {

  const username = useSelector(state => state.user.name)
  const authenticated = useSelector(state => state.user.authenticated)

  return (
    <div className="App">
      { authenticated ? <Home name={username} /> : <Login /> } 
    </div>
  );
}

export default App;