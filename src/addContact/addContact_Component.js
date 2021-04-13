import React from 'react';

const AddContactComponent = ({enterName}) => {
    return (
        <form>
            <label name='name'>Name:</label>
                <input type='text' placeholder='Enter Name' onChange={event => enterName(event.target.value)}></input>
            <label name='address'>Address</label>
                <input type='text' placeholder='Enter Address'></input>
            <label name='number'>Number:</label>
                <input type='tel' placeholder='555-555-5555'pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>

        </form>
    )
}

export default AddContactComponent;