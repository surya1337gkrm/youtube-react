import React from 'react';

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const numFormatter = Intl.NumberFormat('en', { notation: 'compact' });
  return (
    <div className='p-2 m-2 w-72 h-full'>
      <img
        alt='thumbnail'
        src={thumbnails.medium.url}
        className='rounded-md '
      />
      <ul>
        <li className='font-bold py-2 truncate ...'>{title}</li>
        <li>{channelTitle}</li>
        <li>{numFormatter.format(statistics.viewCount)} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
