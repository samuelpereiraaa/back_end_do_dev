const express = require('express')
const app = express()
const db = require("./car_database")
const carDatabase = db.carDatabase()
app.use(express.json())

app.get("/cars", async(req,res) => {
    res.status(200).send(await carDatabase.list())
})

app.get("/cars/:id/", async(req, res) => {
    res.status(200).send(await carDatabase.get(req.params.id))
})


app.post("/cars", async(req, res) => {
    res.status(200).send(await carDatabase.insert(req.body))  
})


app.put("/cars/:id", async(req,res) =>{
    res.status(201).send(await carDatabase.update(req.body, req.params.id))
})

app.delete("/cars/:id", async(req,res) => {
    await carDatabase.del(req.params.id)
    res.status(200).send(`car deleted`)
})
app.listen(3002,() => {
    console.log("init server!!")
})