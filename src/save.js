import React from 'react';

const Save = ({onSave}) => {
    return (
        <button type='button' onClick={() => onSave()}>Save</button>
    )
}

export default Save;