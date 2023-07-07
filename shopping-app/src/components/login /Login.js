import React,{Component} from 'react';
import PlpHeader from '../PlpHeader';

const registerUrl = "https://fakestoreapi.com/auth/login";

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
        // axios({
        //     method:"POST",
        //     url:registerUrl,
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(this.state)
        //   }).then((response) => {
        //    console.log(response);
           
        //  },(error)=>{
        //    console.log("error from all cakes api",error)
   
        //  })
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
                if(data.auth == false){
                    this.setState({message:data.token})
                }else{
                    sessionStorage.setItem('ltk',data.token)
                    this.props.history.push('/login')
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
                                    <button className="btn btn-outline-dark"
                                    onClick={this.handleSubmit}>
                                        Login
                                    </button>
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