import express from 'express';

const PORT = process.env.PORT || 8080;

const app = express();

// Client side
app.use(express.static(__dirname + '/public'));

// Force all remaining to public/index.html
app.get('/*', 
  (req, res) => res.sendFile(__dirname + '/public/index.html')
);

app.listen(
  PORT, 
  () => console.log(`Server listening on localhost:${PORT}`)
);