import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage";
import BottomNavigationBar from "../componets/BottomNavigation/BottomNavigationBar";
import Header from "../componets/Header/Header";
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <Header/>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<ArticlePage/>}/>
          </Routes>
        </div>
        <div className="bottomNavigationBar">
          <BottomNavigationBar/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
