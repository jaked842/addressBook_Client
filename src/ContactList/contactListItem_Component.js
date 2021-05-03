import React from 'react';


const ContactListItem = 
    ({
        index, id,  name, 
        address, phone, onEditName, 
        onEditAddress, onEditPhone, phoneChange, 
        onDel
    }) => {

    const formatNum = () => {
        if(!phoneChange) {
            let num1 = phone.slice(0, 3);
            let num2 = phone.slice(3, 6);
            let num3 = phone.slice(6, 10);
            let finalnum = num1 + '-' + num2 + '-' + num3;
            return finalnum
        }
    }
    return(
        <div>
            <form>
                <input type='text' onChange={event => onEditName(event.target.value, index)} value={name} ></input>
                <input type='text' onChange={event => onEditAddress(event.target.value, index)} value={address} ></input>
                <input type='text' onChange={event => onEditPhone(event.target.value, index)} value={formatNum()} ></input>
                <button type='button' onClick={() => onDel(index)} >Delete</button>
                <h4>index: {index}</h4>
                <h4>id: {id}</h4>
            </form>
        </div>
    )
}

export default ContactListItem;