import React from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';


class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = localStorage.getItem('authToken');
        axiosWithAuth().get("/data")
        .then(res => {
            this.setState({
                ...this.state,
                friends: res.data
            })
        })
        .catch(err => console.log(err))
    }
    
    render(){
     return (
         <div>
             <h2>Name:</h2>
         </div>
     );
    }
}

export default Friends;