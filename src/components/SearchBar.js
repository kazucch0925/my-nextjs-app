import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="アプリ内を検索..." 
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;
