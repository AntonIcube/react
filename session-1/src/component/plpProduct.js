import React from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import ImgProduct1 from './img/imgProd1.jpg';
import ImgProduct2 from './img/imgProd2.jpg';
import ImgProduct3 from './img/imgProd3.jpg';
import ImgProduct4 from './img/imgProd4.jpg';
import Card from '../component/Card';
import '../index.css';


const productNew = [
  { id: 1, productTitle: "Sweater1", price: "Rp. 100.000", imgSrc: ImgProduct1},
  { id: 2, productTitle: "Sweater2", price: "Rp. 200.000", imgSrc: ImgProduct2},
  { id: 3, productTitle: "Sweater3", price: "Rp. 300.000", imgSrc: ImgProduct3},
  { id: 4, productTitle: "Sweater4", price: "Rp. 400.000", imgSrc: ImgProduct4},
  { id: 5, productTitle: "Sweater11", price: "Rp. 100.000", imgSrc: ImgProduct1},
  { id: 6, productTitle: "Sweater22", price: "Rp. 200.000", imgSrc: ImgProduct2},
  { id: 7, productTitle: "Sweater33", price: "Rp. 300.000", imgSrc: ImgProduct3},
  { id: 8, productTitle: "Sweater44", price: "Rp. 400.000", imgSrc: ImgProduct4},
  { id: 9, productTitle: "Sweater111", price: "Rp. 100.000", imgSrc: ImgProduct1},
  { id: 10, productTitle: "Sweater222", price: "Rp. 200.000", imgSrc: ImgProduct2},
  { id: 11, productTitle: "Sweater333", price: "Rp. 300.000", imgSrc: ImgProduct3},
  { id: 12, productTitle: "Sweater444", price: "Rp. 400.000", imgSrc: ImgProduct4},
]

const BestProduct = [
    { id: 1, productTitle: "Sweater20", price: "Rp. 100.000", imgSrc: ImgProduct2},
    { id: 2, productTitle: "Sweater200", price: "Rp. 200.000", imgSrc: ImgProduct2},
    { id: 3, productTitle: "Sweater2000", price: "Rp. 300.000", imgSrc: ImgProduct2},
    { id: 4, productTitle: "Sweater20000", price: "Rp. 400.000", imgSrc: ImgProduct2},
    { id: 5, productTitle: "Sweater200000", price: "Rp. 100.000", imgSrc: ImgProduct2},
    { id: 6, productTitle: "Sweater2000000", price: "Rp. 200.000", imgSrc: ImgProduct2},
    { id: 7, productTitle: "Sweater40", price: "Rp. 300.000", imgSrc: ImgProduct4},
    { id: 8, productTitle: "Sweater400", price: "Rp. 400.000", imgSrc: ImgProduct4},
    { id: 9, productTitle: "Sweater4000", price: "Rp. 100.000", imgSrc: ImgProduct4},
    { id: 10, productTitle: "Sweater40000", price: "Rp. 200.000", imgSrc: ImgProduct4},
    { id: 11, productTitle: "Sweater400000", price: "Rp. 300.000", imgSrc: ImgProduct4},
    { id: 12, productTitle: "Sweater4000000", price: "Rp. 400.000", imgSrc: ImgProduct4},
]
    
function Product(cat){
    let { url } = useRouteMatch();
    if (cat.id == 1) {
        return (
            <div className="category-page">
                <div className="top">
                    <h1 className="title">New Arrivals</h1>s
                </div>
                <div className="content">
                    {productNew.map((data, i)=>{
                        return(
                            <>
                                <Card
                                    id = {data.id}
                                    productName = {data.productTitle}
                                    productImage= {data.imgSrc}
                                    price = {data.price}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        );
           
    }
    if (cat.id == 2){
        return (
            <div className="category-page">
                <div className="top">
                    <h1 className="title">Best Sellers</h1>
                    <span className="desc">Sweater best seller keluaran terbaik.</span>
                </div>
                <div className="content">
                    {BestProduct.map((data, i)=>{
                        return(
                            <>
                            <Card
                                productName = {data.productTitle}
                                productImage= {data.imgSrc}
                                price = {data.price}
                            />

                            </>
                        )
                    })}
                </div>
            </div>
        );
    }
}


export default Product;