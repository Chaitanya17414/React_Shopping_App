import React, { Component } from 'react'

export default class HeaBer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.value
        }
        console.log(this.props.name)
        
    }
    getname(){ return "guest"}
    getwelcome() {
        this.userName= "test";
        console.log(this.userName);
    }
    render() {
        console.log(this.userName)
        return (
            <div>
                first
              <button onClick={()=> this.getwelcome()}>ckiooghujkjj</button>
            </div>
        )
    }
}
