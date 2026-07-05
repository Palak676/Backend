require('dotenv').config();
const express = require('express');
require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
app.use(express.json());
//routes
app.use('/api/books', bookRoutes);
//server
const PORT = process.env.PORT || 10533;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));