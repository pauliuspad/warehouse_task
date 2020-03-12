import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Preview(props) {

 const currentUrl = window.location.pathname.split("/").pop() ;
console.log(currentUrl)

  const PreviewItems = props.products.map((product) => {
  if (product.ID === currentUrl){

    const splitPrice = product.Price.split(" ")
    const splitQuantity = product.Quantity.split(" ")
    const dataPrice = splitPrice.map((number) => parseInt(number))
    const dataQuantity = splitQuantity.map((number) => parseInt(number))

    const priceOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Last changes in Product Price '
      },
      series: [ {
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
        text: 'Last changes in Product Quantity '
      },
      series: [ {
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
        <div className="alignTextR">{ product.Quantity}</div>
        <div className="alignTextR">{ product.Price}</div>
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