import React from 'react';

const Search = ({defaultValue, onChange, messages, loading, cancel}) => {
  return (
    <div style={{flexGrow: 1}}>
      <input
        type="text" 
        placeholder="Search for a Beer"
        defaultValue={defaultValue}
        onChange={evt => onChange(evt.target.value)}
        autoFocus />
      {loading && (
        <button type="button" onClick={cancel}>Cancel</button>
      )}
      {messages.length > 0 && (
        <ul>
          {messages.map(message => 
            <li key={message.text}>
              {message.text}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;