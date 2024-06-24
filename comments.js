//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  fs.writeFile('comments.txt', comment, (err) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Saved');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});