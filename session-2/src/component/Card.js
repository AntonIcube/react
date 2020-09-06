import React, { useState, useEffect, Component }  from 'react';
import { Switch, Route, Link } from "react-router-dom";
import '../App.css';
import '../index.css';



export default function Card(props) {
  const [count, setCount] = useState(0);

  return (
    <li className="product">
      <style jsx="true">{`
        .tier {
          color: #afafaf;
        }
        .qty {
          padding: 10px;
        }
        .btn{
          background: black;
          color: white;
        }
        .card{
          border: 1px solid;
          padding: 10px;
          margin: 20px;
          background: salmon;
        }
        .product-info{
          text-align: center
        }
        .product-images{
          position: relative;
        }
        .header-text-info{
          font-size: 15px;
        }
        }
    `}</style>
      <div className="product-images">
          <span>
            <img src={props.productImage}></img>
          </span>
      </div>
      <div className="product-info">
        <h1 className="header-text-info">{props.productName}</h1>
        <h2>{props.price}</h2>
        <div className="bottom-info">
            <Link className="go-details" to={`/detail?productId=${props.id}&productName=${props.productName}&productImg=${props.productImage}&price=${props.price}`}>View Detail</Link>
        </div>
      </div>
    </li>
  )
}