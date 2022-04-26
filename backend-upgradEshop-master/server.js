const express = require('express');
const app = express();

const PORT = 9999;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server started at Port: ${PORT}`);
    }
});