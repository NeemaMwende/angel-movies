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

  const form = document.querySelector('form');
  const container = document.querySelector('.image-container');

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);
  });

  async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const res = await req.json();
    console.log(res);
}

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

            <div className='image-container'>
                
            </div>
        </form>
    </div>
  )
}

export default Form;