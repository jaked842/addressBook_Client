import React from 'react';

const AddContactComponent = ({enterName, enterAddress, enterPhone, submitContact}) => {
    return (
        <form>
            <label name='name'>Name:</label>
                <input type='text' placeholder='Enter Name' onChange={ enterName }></input>
                <br/>
            <label name='address'>Address</label>
                <input type='text' placeholder='Enter Address'onChange={event => enterAddress(event.target.value)}></input>
                <br/>
            <label name='number'>Number:</label>
                <input type='tel' placeholder='555-555-5555'pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={event => enterPhone(event.target.value)}></input>
                <br/>
            <button type='button' onClick={() => submitContact()}>Add</button>
        </form>
    )
}

export default AddContactComponent;