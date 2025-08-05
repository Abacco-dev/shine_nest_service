import React from 'react';
import Navbar from './Navbar';
import '../styles/homeLayout.css'; 

const HomeLayout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
