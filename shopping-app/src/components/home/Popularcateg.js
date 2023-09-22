import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Popularcateg extends Component {
    render() {
        return (
            <div>
                   <div class="container">
            <div class="heading text-center pb-4">
                <h2 class="title">Popular Categories</h2>
                <p class="title-desc">Vestibulum auctor dapibus neque</p>
            </div>
            <div class="image-grid-2">
                <div className='img-grid'>
                    <img src="images/home/banner-4.jpg"/>
                    <div class="accessories">
                        <h6 className=''>women's clothing</h6>
                        <p>16 items</p>
                        <Link to="/categories"><button className='btn-x btn-outline-white font-weight-bold'>Shop now</button></Link>
                    </div>
                </div>
                <div class="grid-col">
                    <div className="img-grid">
                        <img src="images/home/banner-6.jpg" />
                        <div class="accessories">
                            <h6 className=''>electronics</h6>
                            <p>16 items</p>
                            <Link to="/categories"><button className='btn-x btn-outline-white font-weight-bold'>Shop now</button></Link>
                        </div>
                    </div>
                    <div className='img-grid'>
                        <img src="images/home/banner-7.jpg" />
                        <div class="accessories">
                            <h6 className=''>men's clothing</h6>
                            <p>16 items</p>
                            <Link to="/categories"><button className='btn-x btn-outline-white font-weight-bold'>Shop now</button></Link>
                        </div>
                    </div>
                </div>
                <div className='img-grid'>
                    <img src="images/home/banner-5.jpg"/>
                    <div class="accessories">
                        <h6 className=''>jewelery</h6>
                        <p>16 items</p>
                        <Link to="/categories"><button className='btn-x btn-outline-white font-weight-bold'>Shop now</button></Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row icon-box container">
            <div class="col-sm-6 col-lg-3 icon-box-slide">
                <span class="icon-box-icon"><i class="fas fa-rocket fa-lg"></i></span>
                <div class="icon-box-content">
                    <h3 class="icon-box-title">Free Shipping</h3>
                    <p>Orders $50 or more</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 icon-box-slide">
                <span class="icon-box-icon"><i class="fas fa-undo-alt fa-lg"></i></span>
                <div class="icon-box-content">
                    <h3 class="icon-box-title">Free Returns</h3>
                    <p>Within 30 days</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 icon-box-slide">
                <span class="icon-box-icon"><i class="fas fa-info-circle fa-lg"></i></span>
                <div class="icon-box-content">
                    <h3 class="icon-box-title">Get 20% Off 1 Item</h3>
                    <p>When you sign up</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3 icon-box-slide">
                <span class="icon-box-icon"><i class="far fa-life-ring fa-lg"></i></span>
                <div class="icon-box-content">
                    <h3 class="icon-box-title">We Support</h3>
                    <p>24/7 amazing services</p>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
