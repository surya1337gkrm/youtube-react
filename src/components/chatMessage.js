import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center bg-gray shadow-md p-5 rounded-lg w-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='currentColor'
        className='bi bi-person-circle'
        viewBox='0 0 16 16'>
        <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
        <path
          fillRule='evenodd'
          d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
        />
      </svg>
      <span className='font-bold px-2'>{name}</span>
      <span className='px-2'>{message}</span>
    </div>
  );
};

export default ChatMessage;
