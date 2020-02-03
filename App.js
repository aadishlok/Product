const express = require('express');
const connectDB = require('./config/db');
var cors= require('cors');

connectDB();

const App= express();

const products= require('./routes/api/product');

App.use(cors({origin: true, credentials: true}));

App.use(express.json({extended: false}));

App.use('/api/product', products);

App.get('/', (req, res) => res.send('Hello World !'));

const port= process.env.PORT || 8082;

App.listen(port, () => console.log('Server running on port'+port));
