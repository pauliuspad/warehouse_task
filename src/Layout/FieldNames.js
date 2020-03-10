import React from 'react';

function FieldNames() {

    if(window.location.pathname.split("/").pop() !== 'create'){
      var  activeCheck = <div style={{'text-align': 'center'}}>Active</div>
     }

  return (
    <div className='fieldsNameStyle ProductsGrid' >
            <div >Name</div>
            <div className="alignTextR">EAN</div>
            <div className="alignTextR">Type</div>
            <div className="alignTextR">Weight</div>
            <div className="alignTextR">Color</div>
            <div className="alignTextR">Quantity</div>
            <div className="alignTextR">Price</div>
            {activeCheck}
</div>
  )
}

export default FieldNames;