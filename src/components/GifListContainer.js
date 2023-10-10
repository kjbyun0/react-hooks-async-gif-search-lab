import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const API_KEY = 'TOBdFKq6qO5omIymDCc6uPnVrgWiffXm';

function GifListContainer() {
    const [gifUrls, setGifUrls] = useState([]);

    function handleSearchReq(searchKey) {
        // console.log('in GifListContainer, handleSearchReq, searchKey: ', searchKey);
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=${API_KEY}&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.data);
            setGifUrls(data.data.filter((elem, i) => i < 3).map(elem => elem.images.original.url));
        });
    }

    // console.log('in GifListContainer, setGifUrl: ', setGifUrl);

    return (
        <div /* style={{display: 'inline-flex'}} */ style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <GifList gifUrls={gifUrls} />
            <GifSearch onSearchReq={handleSearchReq}/>
        </div>
    );
}

export default GifListContainer;