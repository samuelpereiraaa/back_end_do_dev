    const express = require("express")
    const db = require("./database")
    const dbContext = db.usersDatabase()
    const app = express()
    app.use(express.json())
    // get for all
    app.get("/users", async (req, res) => {

    res.status(200).send(await dbContext.list())
    })

    //get for id 
    app.get("/users/:id/", async (req, res) => {
        
       res.status(200).send(await dbContext.get(req.params.id))
    })

    // post
    app.post("/users", async (req, res) => {
        
        res.status(201).send(await dbContext.insert(req.body))
    })

    // put for id
    app.put("/users/:id", async (req,res) => {
       
    res.status(200).json(await dbContext.update(req.body, req.params.id))    
    })
    // delete for id
    app.delete("/users/:id", async(req, res) => {
        await dbContext.del(req.params.id)
        res.status(200).send(`user deleted`)
    })
    app.listen(3001, () => {
    console.log('init server')
    })