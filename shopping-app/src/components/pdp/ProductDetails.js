import axios from 'axios'
import React, { Component } from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PlpHeader from '../PlpHeader'
import Loader,{ThreeDots} from  'react-loader-spinner'

function ProductDetails(props) {

    var [productDetails,setproductdetails]=useState({})
     var params= useParams()
     var productid=params.id
    useEffect(()=>{
      
         axios({
           method:'get',
           url:`https://fakestoreapi.com/products/${productid}`
         }).then((response) => {
          setproductdetails(response.data) 
          console.log("responce from details api",response.data)
          
        },(error)=>{
          console.log("error from all details api",error)
          
        })
      },[])
        return (
          <div>
             <PlpHeader />
            <div className="container pb-3">
            {productDetails &&
              <div className="row">
                  <div className="col-md-5 mt-5">   
                      <img src={productDetails.image} style={{height:"18em",width:"15em"}}/>
                  </div>
                  <div className=" col-md-7 mt-5">
                      <h3 className='pdp-title default-color mb-4 mt-5'>{productDetails.title}</h3>
                        <h4 className='pdp-categ font-italic'>{productDetails.category}</h4>
                          <p className='pdp-des' >{productDetails.description}</p>
                          <h4 className='pdp-price default-color'>Price: &#8377;{productDetails.price}</h4>
                          <div> 
                            <button  type="button" class="btn btn-lg btn-block btn-outline-dark mt-5">ADDTO CART</button>
                          </div>       
                  </div>
              </div>}
              <div className=" justify-content-center text-center m-5">
                {!productDetails && 
                  <ThreeDots 
                  height="80" 
                  width="80" 
                  radius="9"
                  color="#4fa94d" 
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                   /> } 
                </div> 
            </div>
          </div>

        )
}
export default ProductDetails
