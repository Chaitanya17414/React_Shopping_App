import React, { Component } from 'react'
import '../styles.css'
import { Link } from 'react-router-dom'

export default class PlpHeader extends Component {
    render() {
        return (
        <div class="main">
        <div class="carousel plp-banner">
            <div class="header">
                <div>
                <Link to="/"><img src="images/home/logo.png" /></Link></div>
                <ul class="menu sf-arrows sf-js-enabled">
                    <li class="megamenu-container">
                        <a href="home.html" class="sf-with-ul active">Home <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="category.html" class="sf-with-ul">Shop <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="product.html" class="sf-with-ul">Product <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#" class="sf-with-ul">Pages <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="blog.html" class="sf-with-ul">Blog <i class="fas fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="elements-list.html" class="sf-with-ul">Elements <i class="fas fa-angle-down"></i></a>
                    </li>
                </ul>
                <div class="header-icons">
                    <div class="header-search">
                        <a href="#" class="search-toggle" role="button"><i class="fas fa-search"></i></a>
                        <form action="#" method="get">
                            <div class="header-search-wrapper">
                                <label for="q" class="sr-only">Search</label>
                                <input type="search" class="form-control" name="q" id="q" placeholder="Search in..."
                                    required=""/>
                            </div>
                        </form>
                    </div>
                    <a href="#" class="search-toggle" role="button"><i class='far fa-user'></i></a>
                    <a href="wishlist.html" class="wishlist-link">
                        <i class="far fa-heart"></i>
                        <span class="wishlist-count">3</span>
                    </a>
                    <div class="dropdown cart-dropdown">
                        <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" data-display="static">
                            <i class="fas fa-shopping-cart"></i>
                            <span class="cart-count">2</span>
                            <span class="cart-txt">$ 164,00</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-1 intro-content text-center">
                <h3 class="intro-subtitle text-white">YOU'RE LOOKING GOOD</h3>
                <h1 class="intro-title text-white">NEW LOOK BOOK</h1>
            </div>
           
        </div>
    </div>
        )
    }
}
