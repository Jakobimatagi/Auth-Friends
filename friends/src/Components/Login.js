import React from 'react';
import axios from 'axios';



class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
    login = e => {
        e.prevent.default();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("authToken", res.data.payload);
            // redirect to logged in homepage
            this.history.push("/protected")
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
                
            </div>
        )
    }
};

export default Login;
