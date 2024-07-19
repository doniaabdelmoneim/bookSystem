import express from 'express'
import connectionDB from './database/connectiondb.js'
import authorRouter from './src/modules/author/author.routes.js'
import bookRouter from './src/modules/book/book.routes.js';
import apiRouter from './src/modules/bonous/api.routes.js'

const app = express()
const port = 3000

connectionDB()
app.use(express.json())
app.use("/book",bookRouter)
app.use("/author",authorRouter)
app.use("/api",apiRouter)





app.get('*', (req, res) => res.status(404).json({msg:'404 Not Found !'}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))