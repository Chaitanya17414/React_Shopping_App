import axios from 'axios'
import React, { Component } from 'react'
import CartDisplay from './CartDisplay'
import PlpHeader from '../PlpHeader'

export default class CartList extends Component {
    constructor(props){
        super(props)
        this.state= {
            cartlist: ''
        }
    }
    render() {
        return (
            <div>
                <PlpHeader />
                <div className="container">
                    <CartDisplay cartdata={this.state.cartlist}/>
                </div>
            </div>
           
        )
    }
    componentDidMount() {
        const data = sessionStorage.getItem("ltk");
        if (data) {    
            axios({
                method:"get",
                url:"https://fakestoreapi.com/carts",
            }).then((response) => {
            this.setState({ cartlist: response.data})    
            },(error)=>{
            console.log("error from all products api",error)
    
            })
        }
        else {
            // this.props.history.push('/')
        }
    }
}
