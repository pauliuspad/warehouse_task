import React from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
      <header style={headerStyle}>
          <h1>Warehouse App</h1>
          <Link className="btn btn-secondary" to="/products">Products</Link>  <Link className="btn btn-secondary" to="/products/create">Create new</Link>
      </header>
  )
}

const headerStyle={
    textAlign: 'center',
    padding: '15px',
    background: '#725a886b',
    marginBottom: '20px'
}

export default Header;