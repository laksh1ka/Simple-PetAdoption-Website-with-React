import Login from './Login';
import SignIn from './SingIn';
import Postadop from './Postadaop';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Search from "./Search";
import Profile from "./Profile";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Login" Component={Login} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/Postadop" Component={Postadop} />
        <Route path="/Search" Component={Search}></Route>
        <Route path="/Profile" Component={Profile}></Route>
      </Routes>
    </div>
  );
}


export default App;


