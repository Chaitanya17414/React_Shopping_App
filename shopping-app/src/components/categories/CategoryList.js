import axios from 'axios'
import React, { Component } from 'react'
import CategoryDisplay from './CategoryDisplay'
import PlpHeader from '../PlpHeader'

export default class CategoryList extends Component {
    constructor(props){
        super(props)
        this.state= {
            productlist: undefined
        }
    }
    render() {
        return (
            <div>
                <PlpHeader />
                <div className="container">
                    <CategoryDisplay listdata={this.state.productlist}/>
                </div>
            </div>
           
        )
    }
    componentDidMount() {
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products",
          }).then((response) => {
           this.setState({ productlist: response.data})
           
         },(error)=>{
           console.log("error from all products api",error)
   
         })
    }
}
