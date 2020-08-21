import React, { useState, useEffect, Component }  from 'react';
import {useLocation, Link } from "react-router-dom";
import '../App.css';
import '../index.css';

function ProductContent(){
    const [count, setCount] = useState(0);
    let query = new URLSearchParams(useLocation().search);
    return (
        <div className="main" style={{width: '100%', height: '100%', marginLeft:100}}>
            <div className="productDetailsImg">
                <img src={query.get("productImg")} alt={query.get("productName")}/>
            </div>
            <div className="product-info" >
                <div className="name">{query.get("productName")}</div>
                <div className="price">
                    <span className="normal">{query.get("price")}</span>
                </div>

                <div >
                    <span className="qty-ket"> QTY : </span>
                    <input></input>
                </div>

                <div className="action">
                    <Link>Add to Cart</Link>
                </div>

                <div className="description">
                    <div className="desc-title">Description</div>
                    <div className="desc-content">
                        Sweater kulit sangat mahal

                    </div>
                </div>
            </div>
        </div>

    )
}

export default function Cart() {
  return (
    <div className="product-page">
        <ProductContent/>
    </div>
  );
}

