import React, { Component } from 'react'
import './form.css'

class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",  


        }
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  You Successfully logged-in`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()

    }
    




    render() {
        return (
            <div id="login">

                <form onSubmit={this.handleSubmit} >
                    <h1 className='new'> Question Answer Platform</h1>
                    <h1 className='old'>Already signed-in</h1>
                    <h4 className='context'>Login!</h4>
                    <label className='primary'>FirstName : </label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br /><br />
                    <label className='secondary'>LastName : </label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br /><br />
                    <label className='third'>Password : </label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br /><br />
                    
                    <input type="submit" value="Login" />
                    
                </form>
            

            </div>

        )
    }
}


export default login
