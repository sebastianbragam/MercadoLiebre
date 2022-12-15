const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});