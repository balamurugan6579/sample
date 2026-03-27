import React from 'react';

const List = () => {
    const product=[
        {
            id:1,
            title:"iPhone 16 Plus 256 GB",
            img:"https://m.media-amazon.com/images/I/3110zKZoMGL._SX342_SY445_QL70_FMwebp_.jpg",
            price:"60000"
        },
        {
            id:2,
            title:"iPhone 16 Plus 256 GB",
            img:"https://m.media-amazon.com/images/I/711VzeHZAPL._SX679_.jpg",
            price:"60000"
        },
        {
            id:3,
            title:"iPhone 16 Plus 256 GB",
            img:"https://m.media-amazon.com/images/I/61evtSm4vDL._SX679_.jpg",
            price:"60000"
        }
    ]
  return (
    <div>
       {product.map((data)=>(
        <div key={data.id}>
            <img src={data.img} alt=""/>
            <h1>{data.title}</h1>
            <h1>${data.price}</h1>

        </div>
       ))}
    </div>
  );
}

export default List;
