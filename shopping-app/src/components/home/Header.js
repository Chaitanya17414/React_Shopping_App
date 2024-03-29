import React, { Component } from 'react'
import '../styles.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
        <div class="main">
        <div class="carousel banner-corousel">
            <div class="header">
                <div>
                <Link to="/"><img src="images/home/logo.png" /></Link></div>
                <ul class="menu sf-arrows sf-js-enabled">
                    <li class="megamenu-container">
                        <a href="home.html" class="sf-with-ul active">Home <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="category.html" class="sf-with-ul">Men <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="product.html" class="sf-with-ul">Women <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#error" class="sf-with-ul">Jewellery<i class="fas fa-angle-down"></i></a>
                    </li>
                </ul>
                <div class="header-icons">
                    <Link to="/login"><a href="#" class="search-toggle" role="button"><i class='far fa-user'></i></a></Link>
                    <a href="wishlist.html" class="wishlist-link">
                        <i class="far fa-heart"></i>
                        <span class="wishlist-count">3</span>
                    </a>
                    <div class="dropdown cart-dropdown">
                       <Link to="/cart"><a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" data-display="static">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">2</span>
                            <span class="cart-txt">$ 164,00</span>
                        </a></Link>
                    </div>
                </div>
            </div>
            <div class="container-1 intro-content text-center">
                <h3 class="intro-subtitle text-white">SEASONAL PICKS</h3>
                <h1 class="intro-title text-white">Get All The Good Stuff</h1>
                <Link to="/plp">
                <button  class="btn-x btn-outline-white">
                    <span>DISCOVER MORE</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                </button> </Link>
            </div>
           
        </div>
    </div>
        )
    }
}
