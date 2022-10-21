const express = require('express')
const app = express();

app.post('/client/:id', (req, res)=>{
    
})

app.post('/webhook/:id', (req, res)=>{

})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`))