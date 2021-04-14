import React, { Component } from 'react';
import ContactListItem from './contactListItem_Component';
import AddContactContainer from '../addContact/addContact_Container';
import SearchListComponent from './searchList_Component';

class ContactListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            listSearch: '',
            filteredList: ''
        }
    }

    updateList = () => {
        fetch('http://localhost:3000/addresslist', {
            method: 'get',
            headers: {'content-type' : 'application/json'},
        })
        .then(response => response.json())
        .then(res => this.setState({list: res}))
    }
    componentDidMount() {
        this.updateList()
    }

    searchList = (item) => {
        this.setState({
            listSearch: item
        })
    }

    render () {
        console.log(this.state.list)

        
        
        const {updateList, searchList} = this;
        return (
            
            <div>
                <AddContactContainer updateList={updateList} />
                <SearchListComponent searchList={searchList} />
                {
                    this.state.list.filter(item => {
                        return item.name.toLowerCase().includes(this.state.listSearch)})
                    .map((value, index) => (
                        <ContactListItem key={index} name={value.name} address={value.address} phone={value.phone}/>
                    ))
                }
            </div>
            
        )
    }
}

export default ContactListContainer;