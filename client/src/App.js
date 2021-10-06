
import Login from "./pages/Login"
import Home from "./pages/Home"
import Protected from "./Protected"
import NavBar from "./nav/NavBar"
import Contracts from "./pages/Contracts"
import VestingMain from "./pages/contracts/VestingMain"
import Mint from "./pages/contracts/Mint"
import CounterOne from "./utils/Counter"
import CompleteHook from "./utils/Counter2"
import About from "./pages/About"


import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  const [userContext, setUsetContext] = useContext(UserContext)

  return (
    <Router>
      <NavBar/>

      <Route path="/login" component={Login}/>
      <Route path="/counter" component={CounterOne}/>
      <Route path="/counterTwo" component={CompleteHook}/>

      {/* <Protected path="/contracts" exact component={Contracts}/>
      <Protected path="/home" component={Home}/>
      <Protected path="/contracts/vesting" component={VestingMain}/>
      <Protected path="/contracts/mint" component={Mint}/> */}
      <Route path="/contracts" exact component={Contracts}/>
      <Route path="/home" component={Home}/>
      <Route path="/contracts/vesting" component={VestingMain}/>
      <Route path="/contracts/mint" component={Mint}/>
      <Route path="/about" component={About}/>

    </Router>
  );
}

export default App;
