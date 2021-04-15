import React, { Component } from 'react';
import AddContactComponent from './addContact_Component';

class AddContactContainer extends Component {
    constructor (props){
        super(props)
        this.state = { 
            name: '',
            address: '',
            phone: '',
        }
    }
    enterName = event => {
        this.setState({
            name: event.target.value
        })
    }
    enterAddress = address => {
        this.setState({
            address: address
        })
    }
    enterPhone = (phone) => {
        this.setState({
            phone: phone
        })
    }
    
    submitContact = () => {
        fetch('http://localhost:3000/add', {
            method: 'post',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
            })
        })
        .then(response => {response.json()})
        .then(res => console.log(res))
        .then(res => this.props.updateList())
        //.then(res => window.location.reload())
    }

    render () {
        const {enterName, enterAddress, enterPhone, submitContact } = this;
        return (
            <AddContactComponent enterName={enterName} enterAddress={enterAddress} enterPhone={enterPhone} submitContact={submitContact}/>
        )
    }
}

export default AddContactContainer;