import express from 'express';

const app = express();

app.get('/jsonTranslate', (request, response)=>{
    return response.status(200).send('Testando 5');
})

app.listen(3333);