const express = require('express');
require('dotenv').config();

const postRoute = require('./routes/post.route');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/v1/', postRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})