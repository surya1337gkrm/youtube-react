import React, { useEffect, useState } from 'react';
import ChatMessage from './chatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import { getRandomUser, getRandomMessage } from '../utils/helper';

const ChatComponent = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState('');

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(
        addMessages({ name: getRandomUser(), message: getRandomMessage() })
      );
    }, 2000);

    return () => clearInterval(timerId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessages({
        name: 'Surya',
        message: liveMessage,
      })
    );
    setLiveMessage('');
  };
  return (
    <div className='flex-col'>
      <div className='p-2 m-5 border border-black w-full h-[500px] rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse'>
        {messages.map((item, idx) => (
          <ChatMessage name={item.name} message={item.message} key={idx} />
        ))}
      </div>
      <form
        className='border border-b-black m-5 w-full'
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <input
          type='text'
          value={liveMessage}
          className='w-5/6 focus:outline-none'
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='p-2 mx-2 bg-green-300'>Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;
