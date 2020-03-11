import React from 'react';
//import Highcharts from 'highcharts';
//import HighchartsReact from 'highcharts-react-official';

function Preview(props) {

  console.log("VIEW PROP 12" + props.products)
  
  const currentUrl = window.location.pathname.split("/").pop() ;
  const test1 = props.products.map((product) => {
  if (product.ID === currentUrl){
    return (
      <div>
      <div>{ product.ID }</div>
      <div>{ product.Name}</div>
      <div>{ product.EAN}</div>
      <div>{ product.Type}</div>
      <div>{ product.Weight}</div>
      <div>{ product.Color}</div>
      <div>{ product.Quantity}</div>
      <div>{ product.Price}</div>
      </div>
      ) 
  }
  })
  const selectedProduct = props.products.filter(product => product.ID === currentUrl)
  
  console.log(test1)
  //const test2 = [...test]
  const test = [...selectedProduct]
  console.log("VIEW PROP 12" + test )
  console.log("VIEW PROP " + selectedProduct[0])
  return (
    <div >
      <h3>Preview Window</h3>
      {test1}
    </div>
  )
}

export default Preview;