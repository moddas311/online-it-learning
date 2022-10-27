const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');


app.get('/', (req, res) => {
    res.send('Online IT Learning API Running');
})


app.get('/learning-categories', (req, res) => {
    res.send(categories);
})

app.get('/learning-categories/:id', (req, res)=>{
    const id = req.params.id
    const selectedCategory = categories.find(category => category.id === id);
    res.send(selectedCategory);
})

app.listen(port, () => {
    console.log('IT API running on port', port);
})