const rede = require ('express')
const app = rede()
const db = require('mysql2/promise')
const porta = 3000

const conn = db.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'faculdade',
    password: 'Small!53142'
})

const todosAlunos = async() => {
    const [query] = await conn.execute('select * from faculdade.alunos')
    return query
}

app.get('/db', async (req, res) => {
    const meuDeus = await todosAlunos()
    console.log (meuDeus)
    res.json(meuDeus)
})

app.get('/aluno/:nome/:cidade', (req, res) => {
    res.status(200).send(aprender())
    //console.log(req.params)
})
app.post('/aluno', (req, res) => {
    res.status(200).send(aprender())
    //console.log(req.params)
})
app.listen(porta)
function aprender(){
    return 'Saquei'
}