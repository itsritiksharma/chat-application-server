const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next();
})

app.use('/', (req, res, next) => {
    res.send("Hello World");
});

app.listen(3001, () => console.log(`Server is running`))
