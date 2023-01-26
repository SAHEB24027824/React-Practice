import { Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import User from "./pages/User";
import Viewuser from "./pages/Viewuser";






function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* Nexted route example start */}
        <Route path='/user' element={<User/>}>
           <Route path='/user/:id' element={<Viewuser/>}/>
        </Route>
        {/* Nested route example end */}
        
         {/* <Route path='/user' element={<User/>}></Route>
         <Route path='/user/:id' element={<Viewuser/>}/> */}
      </Routes>
    </>
  );
}

export default App;
