import React from 'react';

function GifList({ gifUrls }) {
    const disgifData = gifUrls.map((gifUrl, idx) => (<li key={idx}><img src={gifUrl} /></li>));

    return (
        <div>
            <ul>
                {disgifData}
            </ul>
        </div>
    );
}

export default GifList;