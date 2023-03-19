import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='px-5 w-48'>
      <h1 className='font-bold'>Home</h1>
      <ul>
        <li>Videos</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Kids</li>
      </ul>
      <h1 className='pt-5 font-bold'>Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Travel</li>
      </ul>
      <h1 className='pt-5 font-bold'>Watch Later</h1>
      <ul>
        <li>Sports</li>
        <li>News</li>
        <li>Fashion</li>
        <li>Travel</li>
      </ul>
    </div>
  );
};

export default Sidebar;
