import React, { Component } from 'react';
import AddContactComponent from './addContact_Component';

class AddContactContainer extends Component {
    constructor (props){
        super(props)
        this.state = { 
            contact: {
                name: '',
                address: '',
                phone: 0,
            }
        }
    }
    enterName = name => {
        this.setState({
            contact: {name: name}
        })
        console.log(this.state.contact.name)
    }
    enterAddress = address => {
        this.setState({
            contact: {address: address}
        })
    }
    enterPhone = phone => {
        this.setState({
            contact: {phone: phone}
        })
    }
    submitContact = (contact = this.state.contact) => {
        fetch('http://localhost:3000/add', {
            method: 'post',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({
                name: contact.name,
                address: contact.address,
                phone: contact.phone
            })
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }

    render () {
        const {enterName, enterAddress, enterPhone, submitContact } = this;
        return (
            <AddContactComponent {...this}/>
        )
    }
}

export default AddContactContainer;