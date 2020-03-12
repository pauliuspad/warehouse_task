import React from 'react';
import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function backButton() {
  return (
    <div className="backBtn" >    
          <Link to={"/products/"}> <Button variant="btn btn-dark">BACK</Button> </Link>
    </div>
  )
}

export default backButton;