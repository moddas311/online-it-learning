const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Online IT Learning API Running');
})

app.listen(port, ()=>{
    console.log('IT API running on port', port);
})