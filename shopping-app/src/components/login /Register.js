import React,{Component} from 'react';
import PlpHeader from '../PlpHeader';
import { Link } from 'react-router-dom';

const registerUrl = "https://fakestoreapi.com/users";

class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            username:'',
            password:'',
            name:{
                firstname:'',
                lastname:''
            },
            address:{
                city:'',
                street:'',
                number:'',
                zipcode:'',
                geolocation:{
                    lat:'',
                    long:''
                }
            },
            phone:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit=()=>{
        fetch(registerUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then((res)=> res.json())
            .then((data) => {
                console.log(data);
                if(data.message =='User Already Exists') {
                    this.props.history.push('/login');
                }
            })
            .then((error) => {
                console.log("error from all details api",error);
            })
    }

    render(){
        return(
            <div>
                <PlpHeader />
                <div class="register-container">
                <div class="container">
                <div class="dialog-bg">
                    <div class="dialog dialog-top-right">
                        <div class="col-8 dialog-text">
                            <img src="images/home/logo1.png" />
                            <h2 class="dialog-head mb-12" style={{color:"goldenrod"}}> <span>REGISTER HERE</span></h2>
                            <form className='mt-3'>
                                    <div className="form-group mb-4">
                                        <input name="username" value={this.state.username} className="form-control"
                                        onChange={this.handleChange} placeholder='username'
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input name="password" value={this.state.password} className="form-control"
                                        onChange={this.handleChange} placeholder='password'
                                        />
                                    </div>
                                    <div class="form-group mb-4">
                                        <input name="email" type="email" class="form-control" id="inputEmail4" placeholder="Email"
                                        onChange={this.handleChange} value={this.state.email}/>
                                    </div>
                                <div class="row mb-4">
                                    <div class="col">
                                    <input name="name" type="text" class="form-control" placeholder="First name"
                                    onChange={this.handleChange} value={this.state.name.firstname}/>
                                    </div>
                                    <div class="col">
                                    <input name="name" type="text" class="form-control" placeholder="Last name"
                                    onChange={this.handleChange} value={this.state.name.lastname}/>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <input name="address" type="text" class="form-control" id="inputAddress2" 
                                    onChange={this.handleChange} placeholder="Apartment, studio, or floor" value={this.state.address.street}/>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                    <input name="address" type="text" class="form-control" placeholder="City" 
                                    onChange={this.handleChange} value={this.state.address.city}/>
                                    </div>
                                    <div class="col">
                                    <input name="address" type="text" class="form-control" placeholder="Zip" 
                                    onChange={this.handleChange} value={this.state.address.zipcode}/>
                                    </div>
                                </div>
                                <div class="form-group col-md-6 mb-4">
                                    <input name="phone" type="text" class="form-control" id="inputPhone" 
                                    onChange={this.handleChange} placeholder='Phone Number' value={this.state.phone}/>
                                </div>
                                <div className='d-flex justify-content-between mb-5'>
                                        <Link to="/login" className='badge badge-light back-btn'>Go Back</Link>
                                        <button className="btn btn-outline-dark"
                                        onClick={this.handleSubmit}>
                                            Register/Signup
                                        </button>
                                    </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}


export default Register