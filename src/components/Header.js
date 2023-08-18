// components/Header.js
import React, { useState } from 'react';
import AdminLogin from '../modals/adminLoginModal';
const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
    <nav>
      <div className="logo">
        <a href="./">Siva.<span>A</span></a>
      </div>
      <input type="checkbox" id="menu-toggle"/>
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <ul className="menu">
        <li><a href="/#about">About</a></li>
        <li><a href="/#expertise">Expertise</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li  onClick={handleShowModal} ><a href="#">Admin</a></li>
      </ul>
    </nav>
    <div>
      <AdminLogin show={showModal} handleClose={handleCloseModal} />
    </div>
  </header>
  );
};

export default Header;
