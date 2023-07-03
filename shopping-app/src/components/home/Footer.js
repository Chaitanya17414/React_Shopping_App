import React, { Component } from 'react'
import '../styles.css'
export default class Footer extends Component {
    render() {
        return (
            <div class="footer footer-2 container">
            <div class="footer-bottom">
                    <p class="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                    <ul class="footer-menu">
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <div class="social-icons social-icons-color">
                        <a href="#" class="social-icon" target="_blank" title="Facebook" style={{color: "#8f79ed"}}><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon" target="_blank" title="Twitter" style={{color: "#79c8ed"}}><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon" target="_blank" title="Instagram" style={{color:"#dd6d9a"}}><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon" target="_blank" title="Youtube" style={{color: "#e66262"}}><i class="fab fa-youtube"></i></a>
                        <a href="#" class="social-icon" target="_blank" title="Pinterest" style={{color: "#e66262"}}><i class="fab fa-pinterest"></i></a>
                    </div>
            </div>
            </div>
        )
    }
}
