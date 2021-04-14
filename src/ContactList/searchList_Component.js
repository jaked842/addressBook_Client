import React from 'react';

const SearchListComponent = ({searchList}) => {
    return (
        <div>
            <form>
                <input type='text' placeholder='Search' onChange={event => searchList(event.target.value)}></input>
            </form>
            <br/>
        </div>
    )
}

export default SearchListComponent;