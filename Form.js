
import React, { Component } from 'react'
import './form.css'
//import { Anchor } from 'antd';

//const { Link } = Anchor;

class Form extends Component {
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
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
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
            <div id ="form">

                <form onSubmit={this.handleSubmit} >
                    <h1 className='new'> Question Answer Platform</h1>
                    <h1 className='old'>You need to sign-up for posting ques or answer</h1>
                    <h4 className='context'>Already have an account login</h4>
                    <label className='primary'>FirstName : </label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br /><br />
                    <label className='secondary'>LastName : </label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br /><br />
                    <label className='third'>Password : </label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br /><br />
                    <label className='fourth'>Gender : </label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br />
                    <input type="submit" value="Sign-up" /> <span /> 
                    
                </form>
                {/*<Anchor targetOffset='65'>
    <Link href="#login" title="Login" target="_blank"/>
        </Anchor>, */}

            </div>

        )
    }
}

export default Form
