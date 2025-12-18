    const express = require("express")
    const app = express()

    app.use(express.json())

    const users = []
 
    // get for all
    app.get("/users", (req, res) => {
    console.log('start get for all')    
    res.status(200).send({users :users})
    })

    //get for id 
    app.get("/users/:id/", (req, res) => {
        
        const userID = req.params.id
        const user = users.find(x => x.id == userID)

        if(user){
            res.status(200).json(user)
            console.log('searh for id completed')
        }
        else{
            res.status(404).send("user not found!!")

        }
    })

    // post
    app.post("/users", (req, res) => {
        console.log(req.body)
        users.push(req.body)
        console.log('start post...')
        res.status(201).send(req.body)
    })

    // put for id
    app.put("/users/:id", (req,res) => {
        const alunoId = req.params.id
        const updateData = req.body

        // search index
        const index = users.findIndex(y => y.id == alunoId)

        // update for body
        if (index !== -1){
            users[index] = {
                id: alunoId,
                nome: updateData.nome,
                idade: updateData.idade,
                email: updateData.email
            }
            res.status(200).json(users[index])
            console.log("put success")
            return
        } else {
            res.status(404).json({notification : "ERROR, object not found" })
            return
        }
    })
    // delete for id
    app.delete("/users/:id", (req, res) => {
        const alunoId = req.params.id
        const index = users.findIndex(d => d.id == alunoId)

        if(index !== -1){
            users.splice(index,1)
            res.status(202).json({notification: `client of id: ${alunoId}, deleted!`})
            return
        }
        else{
            res.status(404).send({notification: `id ${alunoId} not found !!`})

        }

    })
    app.listen(3001, () => {
    console.log('init server')
    })