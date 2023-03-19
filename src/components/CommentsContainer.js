import React from 'react';

const commentsData = [
  {
    name: 'Surya',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    replies: [
      {
        name: 'Surya',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        replies: [
          {
            name: 'Surya',
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Surya',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    replies: [
      {
        name: 'Surya',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        replies: [],
      },
    ],
  },
  {
    name: 'Surya',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    replies: [
      {
        name: 'Surya',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        replies: [
          {
            name: 'Surya',
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
            replies: [
              {
                name: 'Surya',
                text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Surya',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    replies: [
      {
        name: 'Surya',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        replies: [],
      },
    ],
  },
  {
    name: 'Surya',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className='flex items-center bg-gray-100 rounded-lg shadow-lg m-2 p-5'>
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
      <div className='px-2 mx-2'>
        <h2 className='text-lg font-bold'>{data.name}</h2>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ commentsData }) => {
  return commentsData.map((comment, idx) => (
    <div>
      <Comment data={comment} key={idx} />
      <div className='pl-5 ml-5 border border-l-black '>
        <CommentsList commentsData={comment.replies} key={idx} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold my-2'>Comments</h2>
      <CommentsList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
