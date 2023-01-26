const express = require('express');
const cors = require('cors');

const PORT = 4000;
const app = express();

app.use(cors());

app.get('/', (rqe, res) => {
  const data = [
    {
      name: 'pororo1',
      age: '1',
      nickName: 'gd',
    },
    {
      name: 'pororo2',
      age: '2',
      nickName: 'gsd',
    },
  ];

  res.status(200).send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log(`백앤드 서바가 ${PORT}번에서 작동 중`);
});
