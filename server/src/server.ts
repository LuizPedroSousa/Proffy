import express from 'express';
import routers from './routers';
import Cors from 'cors';
const app = express();

app.use(express.json());
app.use(Cors());
app.use(routers);

const Port = 3333
app.listen(Port, () => {
    console.log(`Servidor Online na porta: http://localhost/${Port}`);
});