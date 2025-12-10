const express = require('express')
const app = express()

app.use(express.json())


// responsavel por pegar todos os alunos
app.get('/students',(req, res) => {
    console.log(req.query)
    console.log("enter my server")
    res.status(200).send("get success!")
})

// responsavel por pegar um aluno
app.get('/students/:id/:outro',(req, res) => {
    console.log(req.params.id)
    console.log(req.params.outro)
    console.log("enter my server")
    res.status(200).send("get success!")
})

app.post('/students', (req,res) => {
    console.log(req.body)
    console.log('post completed')
    res.status(200).send(req.body)
})


app.listen(3000, () => {
    console.log('start server')
})

