import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
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
      <BottomNavigationAction label="Startseite" value="/" />
      <BottomNavigationAction label="Einstellungen" value="/settings" />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
