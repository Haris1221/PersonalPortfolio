import React from 'react';

const Navigation = ({onWorkClick, onAboutClick, onContactClick, onScrollClick}) => {
  return (
    <div className='navitems flex justify-end'>
        <p onClick={onScrollClick} className='text'>home</p>
                <p onClick={onAboutClick} className='text'>About</p>
                <p onClick={onWorkClick} className='text'>Projects</p> 
                <p onClick={onContactClick} className='text'>Contact</p>
    </div>
  );
};

export default Navigation;
