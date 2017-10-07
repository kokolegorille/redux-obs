import React from 'react';

const Search = ({defaultValue, onChange}) => {
  return (
    <div>
      <input
        type="text" 
        placeholder="Search for a Beer"
        defaultValue={defaultValue}
        onChange={evt => onChange(evt.target.value)} />
    </div>
  );
}

export default Search;