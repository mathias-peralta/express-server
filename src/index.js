const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');

//settings
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//middleware

//routes
app.use(indexRouter);

//server

app.listen(app.get('port'), () => {
    console.log('server listen on port:', app.get('port'));
})