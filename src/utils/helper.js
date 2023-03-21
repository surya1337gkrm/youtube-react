const users = [
  'Bret',
  'Antonette',
  'Samantha',
  'Karianne',
  'Kamren',
  'Leopoldo',
  'Elwyn',
  'Maxime',
  'Delphine',
  'Moriah',
];

const messages = [
  'lorem Ips',
  'lorem Ipsum',
  'lorem Ipsum and Cum socii',
  'lorem Ipsum and Cum soc',
  'lorem Ipsum and Cum soc et',
  'Lorem I',
  'Lorem Ipsu',
  "lorem Ipsum and Cummuer"
];

export const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

export const getRandomUser = () => {
  return users[Math.floor(Math.random() * users.length)];
};
