import { useNavigate } from "react-router"
import HomeIcon from '@mui/icons-material/Home';
import './BottomNavigationBar.css'


export default function(){

  const nav = useNavigate()

  return(
    <div className="navBarContainer">
      <div></div>
      <div className="icons" onClick={()=> nav("/")}>
        <HomeIcon/>
      </div>
      <div className="icons">
        <HomeIcon/>
      </div>
      <div className="icons">
        <HomeIcon/>
      </div>
      <div></div>
    </div>
  )
}
