require('dotenv').config(); // Load environment variables

// Express
const express = require('express');
const expresslayout = require('express-ejs-layouts');

const connectDB=require('./server/config/db')

const app = express();
const port = process.env.PORT || 5000;

// Static Files
app.use(express.static('public'));

//Connect to DB
connectDB();

// Templating Engine
app.use(expresslayout);  // Middleware for layouts
app.set('layout', './layouts/main'); // Set the default layout
app.set('view engine', 'ejs'); // Fix typo: changed 'veiw' to 'view'

// Routes
app.use('/', require('./server/routes/main'));

// Start Server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
