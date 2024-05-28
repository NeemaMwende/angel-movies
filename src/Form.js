import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form-content'>
        <h1>Movie Search API</h1>
        <form>
            <input type="text" placeholder="Search for a movie" className='search-input'/>
            <button className='search'>Search</button>
        </form>
    </div>
  )
}

export default Form;