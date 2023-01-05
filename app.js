const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.static('public'));


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
});