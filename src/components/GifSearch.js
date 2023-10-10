import React, { useState } from 'react';

function GifSearch({ onSearchReq }) {
    const [searchKey, setSearchKey] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSearchReq(searchKey);
        setSearchKey('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter a Search Term: </label>
            <input type='text' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
            <input type='submit' value='Find Gifs' />
        </form>
    );
}

export default GifSearch;