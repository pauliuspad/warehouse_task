import React from 'react';

function FieldNames() {

    if(window.location.pathname.split("/").pop() !== 'create'){
      var  fieldNames = (
        <div className='fieldsNameStyle ProductsGrid' >
            <div >Name</div>
            <div className="alignTextR">EAN</div>
            <div className="alignTextR">Type</div>
            <div className="alignTextR">Weight</div>
            <div className="alignTextR">Color</div>
            <div className="alignTextR">Quantity</div>
            <div className="alignTextR">Price</div>
            <div style={{textAlign: 'center'}}>Active</div>
        </div>
      )
     }

  return (
    <div  >    
          {fieldNames}  
    </div>
  )
}

export default FieldNames;