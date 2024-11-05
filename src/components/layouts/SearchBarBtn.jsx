import React, { useState } from 'react';

import './searchbtn.css';

const SearchBarBtn = () => {
  const onChangeHandler = (e) => {
    setdata(e.target.value);
    console.log('searching..');
  };

  const [data, setdata] = useState('');
  return (
    <div>
      <input
        className="h-10 rounded-full border-zinc-400 border-2 p-3"
        type="text"
        value={data}
        placeholder='Search..'
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default SearchBarBtn;
