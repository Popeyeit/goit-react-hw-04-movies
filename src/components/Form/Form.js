import React, { useState } from 'react';

const Form = ({ handleChangeUrl }) => {
  const [value, setValue] = useState('');
  const changeValue = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleChangeUrl(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        name="searchmovie"
        onChange={changeValue}
      />
      <button>Search Movies</button>
    </form>
  );
};

export default Form;
