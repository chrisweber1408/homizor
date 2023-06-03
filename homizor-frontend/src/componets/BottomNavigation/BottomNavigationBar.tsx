import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material//Home';
import "./BottomNavigationBar.css"

const BottomNavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.SyntheticEvent, newPath: string) => {
    navigate(newPath);
  };

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={handleChange}
      showLabels
      className='bottom-navigation'
    >
      <BottomNavigationAction style={{ color: 'black', border: '1px'}} label="Startseite" value="/" icon={<HomeIcon style={{color: 'black'}}/>} />
      <BottomNavigationAction label="Einstellungen" value="/settings" />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
