import React from 'react';
//import Highcharts from 'highcharts';
//import HighchartsReact from 'highcharts-react-official';

function Preview(props) {

  return (
    <div >
      <h3>Preview Window</h3>
      <div>{ props.setViewProp.ID}</div>
      <div>{ props.setViewProp.Name}</div>
      <div>{ props.setViewProp.EAN}</div>
      <div>{ props.setViewProp.Type}</div>
      <div>{ props.setViewProp.Weight}</div>
      <div>{ props.setViewProp.Color}</div>
      <div>{ props.setViewProp.Quantity}</div>
      <div>{ props.setViewProp.Price}</div>
    </div>
  )
}

export default Preview;