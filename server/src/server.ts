import express from 'express';

const app = express();

app.use(express.json());

const user = [
    { name: "Luiz", age: 25 },
    { name: "Roberto", age: 16 },
    { name: "Sthephan", age: 17 },
];

app.post("/", (req, res) => {
    console.log(req.query);
    console.log(req.body);
    return res.json(user);
});

const Port = 3333
app.listen(Port, () => {
    console.log(`Servidor Online na porta: http://localhost/${Port}`);
});