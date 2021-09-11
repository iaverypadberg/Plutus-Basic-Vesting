
import Login from "./pages/Login"
import Home from "./pages/Home"
import Protected from "./Protected"
import NavBar from "./nav/NavBar"
import Contracts from "./pages/Contracts"
import VestingMain from "./pages/contracts/VestingMain"


import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  const [userContext, setUsetContext] = useContext(UserContext)

  return (
    <Router>
      <NavBar/>

      <Route path="/login" component={Login}/>

      <Protected path="/contracts" exact component={Contracts}/>
      <Protected path="/home" component={Home}/>
      <Protected path="/contracts/vesting" component={VestingMain}/>

    </Router>
  );
}

export default App;
