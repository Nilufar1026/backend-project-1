const express=require('express')
require('dotenv').config()

const app=express()
const userRoutes=require('./routes/users')

const PORT =process.env.PORT || 5000

app.use( express.json() )

app.use(userRoutes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))