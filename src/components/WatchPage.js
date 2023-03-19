import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [searchparams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className='flex-col'>
      <div className='p-5 m-5'>
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
      <div className='px-5 mx-5'>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
