import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import BottomNavigationBar from "./componets/BottomNavigation/BottomNavigationBar";
import Header from "./componets/Header/Header";

function App() {


  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
        </Routes>
      <BottomNavigationBar/>
    </BrowserRouter>
  );
}

export default App;
