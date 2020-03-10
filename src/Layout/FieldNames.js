import React from 'react';

function FieldNames() {

    if(window.location.pathname.split("/").pop() !== 'create'){
      var  activeCheck = <div>Active</div>
     }

  return (
    <div >
            <div>Name</div>
            <div>EAN</div>
            <div>Type</div>
            <div>Weight</div>
            <div>Color</div>
            <div>Quantity</div>
            <div>Price</div>
            {activeCheck}
</div>
  )
}

export default FieldNames;