import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/config';
import axios from 'axios';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const { data } = await axios.get(YOUTUBE_API);
    setVideos(data.items);
  };
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
