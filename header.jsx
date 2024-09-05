// Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar sticky="top" className={darkMode ? 'dark-mode' : ''}>
      <Navbar.Brand href="#home">Calorie Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
      </Nav>
      <Button variant="outline-secondary" onClick={toggleDarkMode}>
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </Button>
      <Button variant="outline-secondary" href="#calendar">
        <FontAwesomeIcon icon={faCalendar} />
      </Button>
    </Navbar>
  );
}

export default Header;