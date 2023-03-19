import React from 'react';
import Button from './Button';

const Buttonslist = () => {
  const list = [
    'All',
    'Movies',
    'Zack Snyder',
    'DC',
    'Namaste',
    'React',
    'Dayton',
    'Anirudh',
    'React Router DOM',
    'Redux Toolkit',
  ];
  return (
    <div className='flex'>
      {list.map((ele, idx) => (
        <Button name={ele} key={idx} />
      ))}
    </div>
  );
};

export default Buttonslist;
