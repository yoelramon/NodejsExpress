const CategorysJson = require('./models/categorias.json'); //Interface Json

const express = require('express');

const cors = require('cors');//Importante para que no halla conflicto por diferentes direccion al usar el fecht

const app = express();


app.use(cors());
app.use(express.json());



app.get('/categorys', (req, res) => {

    res.json(CategorysJson);
});


app.listen(3000, () =>{ 
    console.log('Serve on port 3000')
});