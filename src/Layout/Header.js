import React from 'react';

function Header() {
  return (
      <header style={headerStyle}>
          <h1>Warehouse App</h1>
      </header>
  )
}

const headerStyle={
    textAlign: 'center',
    padding: '15px'
}

export default Header;