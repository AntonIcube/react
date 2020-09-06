import React, { useState, }  from 'react';
import {useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/action/cart";
import '../App.css';
import '../index.css';
import { connect } from 'react-redux';

function ProductContent(props){
    const [count, setCount] = useState(0);
    let query = new URLSearchParams(useLocation().search);
    const dispatch = useDispatch();

    let productID = query.get("productId");
    let productName = query.get("productName");
    let productImage = query.get("productImg");
    let productPrice = query.get("price");
    let productQty = count;
    

    const addtoCart  = (productID, productName, productImage, productPrice, productQty) => {
        dispatch(
            addProduct({
            id: productID,
            name: productName,
            img : productImage,
            price : productPrice,
            qty : productQty
            })
        );
        };
        console.log(props);   
    return (
        <div className="main" style={{width: '100%', height: '100%', padding: '20px'}}>
            <div className="productDetailsImg" style={{margin: 'auto'}}>
                <img src={query.get("productImg")} alt={query.get("productName")}/>
            </div>
            <div className="pdp-box" >
                <div className="name">{query.get("productName")}</div>
                <div className="price">
                    <span className="normal">{query.get("price")}</span>
                </div>

                <div className="qty-box">
                    <span className="qty-ket"> QTY : </span>
                    <button onClick={() => setCount(count - 1)}><span>-</span></button>        
                    <span className="qty"> {count} </span>
                    <button onClick={() => setCount(count + 1)}><span>+</span></button>
                </div>

                <div className="action">
                <button onClick={() => addtoCart(query.get("productId"), productName, productImage, productPrice, count)}>Add to Cart</button>
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

const mapsStateProps = (state) => {
    return {
        order: state.cart
    }
}

export default connect(mapsStateProps)(ProductContent);

