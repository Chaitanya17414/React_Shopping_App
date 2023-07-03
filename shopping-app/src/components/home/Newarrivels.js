import React, { Component } from 'react'
import '../styles.css'

export default class Newarrivels extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div class="heading text-center pb-4">
                    <h2 class="title">Recent Arrivals</h2>
                    <p class="title-desc">Aliquam tincidunt mauris eurisus</p>
                </div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{backgroundColor:''}}>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="cards-wrapper">
                <div class="card">
                    <img src="images/home/product-1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                   
                    </div>
                </div>
                <div class="card d-none d-md-block">
                    <img src="images/home/product-2.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                   
                    </div>
                </div>
                <div class="card d-none d-md-block">
                    <img src="images/home/product-3.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                   
                    </div>
                </div>
                <div class="card d-none d-md-block">
                    <img src="images/home/product-5.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                   
                    </div>
                </div>
                </div>
                </div>
                <div class="carousel-item">
                <div class="cards-wrapper">
                    <div class="card">
                    <img src="images/home/product-4.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                      
                    </div>
                    </div>
                    <div class="card d-none d-md-block">
                    <img src="images/home/product-5.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                       
                    </div>
                    </div>
                    <div class="card d-none d-md-block">
                    <img src="images/home/product-6.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                      
                    </div>
                    </div>
                    <div class="card d-none d-md-block">
                    <img src="images/home/product-1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-data">
                      
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        )
    }
}
