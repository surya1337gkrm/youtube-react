import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import axios from 'axios';
import { YOUTUBE_SEARCH_API } from '../utils/config';
import { addSearch } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [showSearchDiv, setShowSearchDiv] = useState(false);
  const searchCached = useSelector((store) => store.search.searchData);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getSuggestions = async () => {
    if (searchTerm) {
      const { data } = await axios.get(YOUTUBE_SEARCH_API + searchTerm);
      setSearchData(data[1]);
      dispatch(addSearch({ [searchTerm]: data[1] }));
    }
  };

  useEffect(() => {
    //implement debouncing for 200ms
    //if diff between 2 consecutive key strokes i less than 200ms skip api call
    const timerId = setTimeout(() => {
      if (searchCached[searchTerm]) {
        setSearchData(searchCached[searchTerm]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <div className='grid grid-flow-col p-2 sticky top-0 bg-white w-full'>
      <div className='flex col-span-1 gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-list cursor-pointer m-2'
          viewBox='0 0 16 16'
          onClick={handleToggleMenu}>
          <path
            fillRule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>
        <a href='/'>
          <img
            src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'
            alt='youtube'
            className='h-12 w-fit'
          />
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <div className='flex'>
          <input
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => handleChange(e)}
            onFocus={() => setShowSearchDiv(true)}
            onBlur={() => setShowSearchDiv(false)}
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full focus:outline-2 focus:outline-blue-400'
          />
          <button className='border border-gray-400 p-2 bg-gray-100 rounded-r-full w-12 h-fit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search m-1'
              viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </div>
        {showSearchDiv && searchData.length !== 0 ? (
          <div className='fixed bg-white m-1 py-2  w-[34rem] shadow-lg rounded-lg border border-gray-400'>
            <ul>
              {searchData.map((item, idx) => (
                <li
                  key={idx}
                  className='py-1 px-5 hover:bg-gray-100 hover:font-bold ease-in-out duration-150'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className='col-span-1 flex justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-person-circle'
          viewBox='0 0 16 16'>
          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
          <path
            fillRule='evenodd'
            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Head;
