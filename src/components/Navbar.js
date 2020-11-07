import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style nav">
      <li className="nav-item">
        <Link to="/" style={{ textDecoration: 'none' }} className="nav-link active">Home</Link>
      </li>
    </nav>
  )
}

export default navbar;