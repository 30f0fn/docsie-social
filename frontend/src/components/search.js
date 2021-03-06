import React from 'react';

// <form action="<yourURL>" method="GET">
//     <input type="text" id="keyword" name="keyword" placeholder="XXX">
//     <input type="text" id="state" name="state" placeholder="XXX">
//     <button type="submit" id="submit">Submit</button>
// </form>

const Search = () =>
        <form className=""
          action="/search"
          method="GET"
          className="search-form"
        >
          <input
            type="search"
            name="q"
            id="site-search"
            label="search"
          />
          <a className="f6 link dim ph1 dib black">
            Search
          </a>
        </form>;


export default Search;
