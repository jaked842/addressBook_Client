import React, { Component } from 'react';
import ContactListItem from './contactListItem_Component';
import AddContactContainer from '../addContact/addContact_Container';
import SearchListComponent from './searchList_Component';
import Save from '../save';

class ContactListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            listSearch: '',
            filteredList: '',
            change: false
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

    onEditName = (event, index) => {
        let arr = this.state.list;
        arr[index].name = event
        this.setState({
            list: arr, 
            change: true
        })     
    }

   /* updateItem = (value, type, index) => {
        fetch('http://localhost:3000/addresschange', {
            method: 'post',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({
                type: 
            })
        })
    }
    */

    render () {
        console.log(this.state.list)
        const {updateList, searchList, onEditName} = this;
        if(this.state.change) {
            return (
                <div>
                <AddContactContainer updateList={updateList} />
                <SearchListComponent searchList={searchList} />
                <Save />
                {
                    this.state.list.filter(item => {
                        return item.name.toLowerCase().includes(this.state.listSearch)})
                    .map((value, index) => (
                        <ContactListItem key={index} index={index} id={value.id} name={value.name} address={value.address} phone={value.phone} onEditName={onEditName}/>
                    ))
                }
                </div>
            )
        } else {

            return (
                <div>
                    <AddContactContainer updateList={updateList} />
                    <SearchListComponent searchList={searchList} />
                    {
                        
                    }
                    {
                        this.state.list.filter(item => {
                            return item.name.toLowerCase().includes(this.state.listSearch)})
                        .map((value, index) => (
                            <ContactListItem key={index} index={index} id={value.id} name={value.name} address={value.address} phone={value.phone} onEditName={onEditName}/>
                        ))
                    }
                </div>
                
            )
        }
    }
}

export default ContactListContainer;