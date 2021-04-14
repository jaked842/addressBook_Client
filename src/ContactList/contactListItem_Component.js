import React from 'react';

const ContactListItem = ({name, address, phone}) => {

    const formatNum = () => {
        let num1 = phone.slice(0, 3);
        let num2 = phone.slice(3, 6);
        let num3 = phone.slice(6, 10);
        let finalnum = num1 + '-' + num2 + '-' + num3;
        return finalnum
    }

    return(
        <div>
            <form>
                <input type='text' value={name}></input>
                <input type='text' value={address}></input>
                <input type='text' value={formatNum()}></input>
            </form>
        </div>
    )
}

export default ContactListItem;