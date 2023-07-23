import React,{Component} from 'react';
import PlpHeader from '../PlpHeader';
import { Link } from 'react-router-dom';


const loginUrl = "https://fakestoreapi.com/auth/login";

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit=()=>{
        fetch(loginUrl,
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
                if(data.auth === false){
                    this.setState({message:data.token})
                }else{
                    sessionStorage.setItem('ltk',data.token)
                   this.props.history.push('/')
                }
            })
    }

    render(){
        return(
            <div>
                <PlpHeader />
                <div class="login-container">
                <div class="container">
                <div class="dialog-bg">
                    <div class="row dialog dialog-top-right">
                        <div class="col-8 dialog-text">
                            <img src="images/home/logo1.png" />
                            <h2 class="dialog-head mb-5" style={{color:"goldenrod"}}> <span>LOGIN HERE</span></h2>
                            <div className="panel panel-danger">
                                <h2 style={{color:'red'}}>{this.state.message}</h2>
                                <div className="panel-body">
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
                                    <div className='d-flex justify-content-between'>
                                        <Link to="/register" className='badge badge-light register-btn'>Register Here</Link>
                                        <button className="btn btn-outline-dark"
                                        onClick={this.handleSubmit}>
                                            Login
                                        </button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <img src="images/home/img-1.jpg" width="auto" height="auto" />
                        </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}


export default Login