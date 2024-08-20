const express = require('express');
const cors = require('cors');

const db = require('./config/db.js');
// create express instance
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// adds packages
app.use(cors());
app.use(express.json());

// required for rendering pages
// app.set('view engine','ejs');

app.get('/', (req, res) => {
    // console.log('Here');
    // internal server error w/ default message
    // res.sendStatus(500);
    // error w/ custom message
    // res.status(500).send('ran into intsernal server error'); 

    // send download link to file
    // res.download('index.js');
    // res.send('Hi mom');

    // send json
    res.json({ 'first': 'tyler', 'last': 'wu' });
    // send file
    res.render()
});
// console.log('in server')



// Mount API routes
const notesRouter = require("./routes/notes");
const usersRouter = require("./routes/users");

app.use('/notes', notesRouter); // adds notes prefix to routes in notes
app.use('/users', usersRouter);
// // app.use('/api', apiRoutes);
