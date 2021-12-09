
import React,{createContext,useReducer} from 'react';
import { Route ,Switch} from 'react-router';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Error from './Component/Error';
import{initialState,reducer}from "../src/reducer/useReducer"
export const UserContext=createContext();
const Routing=()=>{
  return(
<Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/About">
    <About/>
    </Route>
    <Route path="/Contact">
    <Contact/>
    </Route>
    <Route path="/Login">
    <Login/>
    </Route>
    <Route path="/SignUp">
    <SignUp/>
    </Route>

    <Route>
    <Error/>
    </Route>

    <Route path="/logout">
    <About/>
    </Route>

    </Switch>
  );
}

const App =()=> {
 
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <UserContext.Provider value={{state,dispatch}}>
    
      <Navbar/>
      <Routing/>
    </UserContext.Provider>
    </>
  );
}

export default App;
