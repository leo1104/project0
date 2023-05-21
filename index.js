const express = require('express');
const http = require('http');
const cors = require('cors');
const { checkKey } = require('./middleware/header');

const userRoute = require('./routes/users');
const eventRoute =require('./routes/events')
const blogRoute = require('./routes/blogs')


const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use('/user', checkKey, userRoute);
app.use('/events', checkKey, eventRoute);
app.use('/blogs',checkKey,blogRoute)

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});