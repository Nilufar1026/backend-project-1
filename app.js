const express=require('express')
require('dotenv').config()

const app=express()
const userRoutes=require('./routes/users')
const receptRoutes=require('./routes/recept')
const {errorHandler}=require('./middleware/errorHandler')


app.use( express.json() )

app.use(userRoutes)
app.use('/recipes',receptRoutes)

app.use(errorHandler)

const PORT =process.env.PORT || 5000
app.listen(PORT, () => console.log(`Running on port ${PORT}`))