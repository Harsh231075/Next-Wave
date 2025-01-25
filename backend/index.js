const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000

const profileRoutes = require('./Routes/profileRoutes');
const postRoutes = require('./Routes/postRoutes')

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // Allow cookies and authentication headers
}));
app.use(express.urlencoded({ extended: true }));

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/', profileRoutes);
app.use('/post', postRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
