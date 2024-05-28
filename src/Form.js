import React from 'react';
import './Form.css';
import { useState } from 'react';

const Form = () => {
    const [notification, setNotification] = useState('');

  const handleFocus = () => {
    setNotification('Please fill this field');
  };

  const handleBlur = () => {
    setNotification('');
  };

  return (
    <div className='form-content'>
        <h1>Movie Search API</h1>
        <form>
            <input type="text" placeholder="Search for a movie" className='search-input'/>
            <button className='search'
                onFocus={handleFocus}
                onBlur={handleBlur}
            >Search</button>
            {notification && <p className="warning">{notification}</p>}

        </form>
    </div>
  )
}

export default Form;