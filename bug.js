const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling if req.body is empty or invalid
  console.log(user.name); //Error: Cannot read properties of undefined (reading 'name') if no name is provided in the request body
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));