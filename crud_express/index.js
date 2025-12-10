const express = require("express")
const app = express()

app.use(express.json())
 
    // get for all
    app.get("/users", (req, res) => {
    console.log('start get')    
    res.status(200).send("get completed!")
    })

    //get for id 
    app.get("/users/:id/", (req, res) => {
        console.log('searh for id...')
        console.log(req.params.id)
        res.status(200).send('searh for id completed!')
    })

    // post
    app.post("/users", (req, res) => {
        console.log(req.body)
        console.log('start post...')
        res.status(200).send(req.body)
    })

    // put for id
    app.put("/users/:id", (req,res) => {
        console.log("start  put...")
        res.status(200).send(req.params.id)
    })

    // delete for id
    app.delete("/users/:id", () => {
        console.log("start delete")
        res.status(200).send(req.params.id)
    })



app.listen(3001, () => {
    console.log('init server')
})