import { useNavigate } from "react-router"
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import BookIcon from '@mui/icons-material/Book';
import './BottomNavigationBar.css'


export default function(){

  const nav = useNavigate()

  return(
    <div className="navBarContainer">
      <div></div>
      <div className="icons" onClick={()=> nav("/")}>
        <HomeIcon/>
      </div>
      <div className="icons" onClick={()=> nav("/storagepage")}>
        <BookIcon/>
      </div>
      <div className="icons">
        <StorageIcon/>
      </div>
      <div></div>
    </div>
  )
}
