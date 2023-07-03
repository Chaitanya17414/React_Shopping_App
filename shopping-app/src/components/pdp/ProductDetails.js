import axios from 'axios'
import React, { Component } from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PlpHeader from '../plp/PlpHeader'

function ProductDetails(props) {
    var [productDetails,setproductdetails]=useState({})
     var params= useParams()
     var productid=params.id
     console.log (productid)
    useEffect(()=>{
         axios({
           method:'get',
           url:`https://fakestoreapi.com/products/${productid}`
         }).then((response) => {
          setproductdetails(response.data) 
          console.log("responce from all cakes api",response.data)
        },(error)=>{
          console.log("error from all cakes api",error)
        })
      },[])
        return (
          <div className="container ">
                <PlpHeader />
            <div className="row">
                <div className="col-xs-3 mt-5">     
                    <img src={productDetails.image} style={{height:"18em",width:"15em"}}/>
                </div>
                <div class=" col-md-9 mt-5">
                    <h3>{productDetails.title}</h3>
                      <h4>{productDetails.category}</h4>
                <div>
                        </div>
                        <p >{productDetails.description}</p>
                        <h6>Quantity: 1</h6>
                        <h4>price: &#8377;{productDetails.price}</h4>
                        <div> 
                          <button  type="button" class="btn btn-large btn-block btn-warning">ADDTO CART</button>
                        </div>       
                </div>
             </div>
          </div>
        )
}
export default ProductDetails
