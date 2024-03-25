const express = require('express');
const {server} = require('./config/index')
const {email} = require('./config/index')


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const api = require('./router');
app.use('/api',api)
app.listen(server.PORT, async ()=>{
    console.log(`listening to portnumber:${server.PORT}`);
    email.main();
    
})
