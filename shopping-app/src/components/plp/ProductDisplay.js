import React from 'react';
import {Link} from 'react-router-dom';

function ProductDisplay(props){
    const renderList = ({listdata}) => {
        if(listdata){
            if(listdata.length>1){
                return listdata.map((item) => {
                    return(
                        <Link to={`/productDetail/${item.id}`}>
                        <div className="item">
                             <div class="product">
                                <img className="Image" src={item.image} height={250} width={250}/>
                            </div>
                                        <div class="overlay overlayBottom overlay-addtocart">
                                            <div class="text-icon">
                                                <div><i class="fas fa-cart-plus"></i>
                                                <span class="title1">add to cart</span></div>
                                            </div>
                                        </div>
                                        <div class="overlay overlayRight">
                                            <div class="text"><i class="far fa-heart"></i></div>
                                        </div>
                                        <div class="product-text">
                                            <div class="product-cat">
                                                <a href="#" class="product-cat">{item.category}</a>
                                            </div>
                                            <span class="product-title"><a href="product.html">{item.title}</a></span>
                                            <p class="product-price">₹{item.price}</p>
                                            <div class="ratings-container">
                                                <span class="ratings-text"> ( {item.rating.rate} Reviews )</span>
                                            </div>
                                        </div>
                        </div>
                        </Link>
                    )
                })
            }else{
                return(
                    <div className="item">
                        <h2>No Data Found</h2>
                    </div>
                )
            }
        }
    }

    return(
        <div className="container" >
            <div className="plp-banner">
                <div class="container-1 intro-content text-center">
                    <h3 class="intro-subtitle text-white">YOU'RE LOOKING GOOD</h3>
                    <h1 class="intro-title text-white">NEW LOOK BOOK</h1>
                </div>    
            </div>
            <div className="product-list mt-5">
                    {renderList(props)}
            </div>
        </div>
    )
}


export default ProductDisplay