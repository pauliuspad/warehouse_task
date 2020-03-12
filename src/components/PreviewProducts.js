import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Preview(props) {

 const currentUrl = window.location.pathname.split("/").pop() ;

  const PreviewItems = props.products.map((product) => {
  if (product.ID === currentUrl){

    const splitPrice = product.Price
    const splitQuantity = product.Quantity

    const dataPrice = Object.values(splitPrice).map((number) => parseInt(number))
    const dataQuantity = Object.values(splitQuantity).map((number) => parseInt(number))


    const priceOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Changes in Product Price '
      },
      series: [ {
        name: 'Price',
        data:  dataPrice
      }
      ],
      yAxis: [
        {
          min: 0,
          title: {
            text: "Price"
          }
        } ]
    };

    const quantityOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Changes in Product Quantity '
      },
      series: [ {
        name: 'Quantity',
        data: dataQuantity
      },
      ] ,
      yAxis: [
        {
          min: 0,
          title: {
            text: "Quantity"
          }
        } ] };

    return (
      <div>
      <div className='ProductItemsStyle ProductsGrid'>
        <div>{ product.Name}</div>
        <div className="alignTextR">{ product.EAN}</div>
        <div className="alignTextR">{ product.Type}</div>
        <div className="alignTextR">{ product.Weight}</div>
        <div className="alignTextR">{ product.Color}</div>
        <div className="alignTextR">{ product.Quantity[0]}</div>
        <div className="alignTextR">{ product.Price[0]}</div>
        <div style={{textAlign: 'center'}}>
        <input type="checkbox" checked={product.Active} />
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={priceOptions} />
      <HighchartsReact highcharts={Highcharts} options={quantityOptions} />
      </div>
      ) 
  }
  else{
    return ""
  }
  })

  return (
    <div >
      {PreviewItems}
    </div>
  )
}

export default Preview;