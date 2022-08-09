const express = require('express');
const app = express();
const port = 8080;
// const router = require('./router/router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());
// app.use(router);

app.listen(port, function (request, response) {
    console.log(`Servidor rodando na porta ${port}`);
});
