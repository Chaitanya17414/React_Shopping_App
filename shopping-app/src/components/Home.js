import React, { Component } from 'react'
import Header from './home/Header'
import Newarrivels from './home/Newarrivels'
import Footer from './home/Footer'
import Popularcateg from './home/Popularcateg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Newarrivels />
                <Popularcateg />
                <Footer />
            </div>
        )
    }
}
