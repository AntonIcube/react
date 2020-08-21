import React from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import Card from './Card';
import imgProd1 from './img/imgProd1.jpg';
import imgProd2 from './img/imgProd2.jpg';
import imgProd3 from './img/imgProd3.jpg';
import imgProd4 from './img/imgProd4.jpg';


const categoryId = [
    { id: "1", name: "New Arrivals" },
    { id: "2", name: "Best Sellers" }
  ];

  const product = [
    { productTitle: "Sweater1", price: "Rp. 100.000", imgSrc: imgProd1},
    { productTitle: "Sweater2", price: "Rp. 200.000", imgSrc: imgProd2},
    { productTitle: "Sweater3", price: "Rp. 300.000", imgSrc: imgProd3},
    { productTitle: "Sweater4", price: "Rp. 400.000", imgSrc: imgProd4}
  ]

  function Product(){
    return (
        <>
            {product.map((data, i)=>{
                return(
                <Card
                    productName = {data.productTitle}
                    productImage= {data.imgSrc}
                    price = {data.price}
                />
                )
            })}
        </>
    );
  }

  
export default function CategoryById() {
    let { url } = useRouteMatch();
    return (
      <>
        <ul class="cat">
          {categoryId.map((categoryId, index) => (
            <li key={index} class="category-section">
              <h1>{categoryId.name}</h1>
              <Link to={`category/${categoryId.id}`}>View More</Link>
              <Product/>
            </li>
          ))}
        </ul>
      </>
    );
  }