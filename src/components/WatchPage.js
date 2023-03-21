import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { getUsers } from '../utils/chatSlice';
import ChatComponent from './ChatComponent';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [searchparams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // dispatch(getUsers());
  }, []);
  return (
    <div className='flex-col w-full'>
      <div className='flex'>
        <div className='m-5'>
          <iframe
            width='1000'
            height='500'
            src={`https://www.youtube.com/embed/${searchparams.get(
              'v'
            )}?autoplay=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </div>
        <ChatComponent />
      </div>

      <div className='mx-5'>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
