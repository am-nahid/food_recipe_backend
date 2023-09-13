const express = require('express')
const dotenv = require("dotenv")
const axios = require('axios')
const cors = require('cors')
const route = require('./routes/routes')
const connectToDB = require('./config/config')

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({
    origin:'*'
}))

// app.get('/recipes/chicken', async (req,res)=>{
//     const response = await axios.get(
//         `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
//     )
//     console.log(response.data);
//     res.send(response.data)
// })

app.get('/recipes/:query', async (req,res)=>{
    const response = await axios.get(
        `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
    // console.log("response.data");
    res.send(response.data.hits)
})
const port = process.env.PORT || 8080

app.use('/user',route)

app.get('/',(req,res)=>{
    res.send({
        message: "working fine"
    })
})

app.listen(port,async ()=>{
    await connectToDB()
    console.log(`Site is up and running on port ${port}`);
})