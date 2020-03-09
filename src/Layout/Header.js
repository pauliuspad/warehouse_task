import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
      <header style={headerStyle}>
          <h1>Warehouse App</h1>
          <Link to="/products">Products</Link> |  <Link to="/products/create">Create new</Link>
      </header>
  )
}

const headerStyle={
    textAlign: 'center',
    padding: '15px'
}

export default Header;