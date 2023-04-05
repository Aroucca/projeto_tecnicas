import  Express  from "express";
const app = Express();
const notebooks = [
    {"id": 1, "marca":"Asus"},
    {"id":2, "marca":"HP"}
]


app.get('/', (req, res) => {
    res.status(200).send('API loja')
})
app.get('/note', (req,res) =>{
    res.status(200).json(notebooks)
})

export default app;