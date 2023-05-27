require('dotenv').config()
const express = require('express');
const sequelize = require('./db.js')
const models = require('./models/models.js')
const cors = require('cors');
const errorHandler = require('./midleware/ErrorHandlingMidleware.js');
const router = require('./routes/index.js')
const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());

app.use(express.json());
app.use('/api', router);
// app.get('/', cors(), (req, res) => {
//     res.status(200).json({ message: 'work!!!!' })
// })
app.use(errorHandler);


const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync(); 
        app.listen(PORT, () => console.log('server start on port ' + `${PORT}`))  
    }
    catch(e){
        console.log(e)
    }
}

start() 
