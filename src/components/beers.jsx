import React from 'react';

const Beers = ({beers, loading}) => {
  return (
    <div style={{flexGrow: 3}}>
      <h3>Search Results: ({beers.length}) {loading && <img src="/ajax-loader.gif" />}</h3>
      {beers.length > 0 && (
        <ul>
          {beers.map(beer => (
            <li key={beer.id}>
              <figure>
                <img 
                  src={beer.image_url} 
                  style={{height: '150px'}} 
                  alt="" />
              </figure>
              <p>{beer.name} <small>{beer.tagline}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Beers;