import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import BottomNavigationBar from "./componets/BottomNavigation/BottomNavigationBar";
import Header from "./componets/Header/Header";
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className="background-color">
      <Header/>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
        </Routes>
        <BottomNavigationBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
