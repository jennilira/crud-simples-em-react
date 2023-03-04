import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();
// Express permite o uso dos métodos (verbos) HTTP

app.use(express.json());
app.use(cors());
//cors significa
//CORS significa Cross-Origin Resource Sharing (ou Compartilhamento de Recursos de Origem Cruzada).
// Embora o navegador impeça o acesso de recursos que não estão localizados na mesma origem,
// é possível usar o CORS para alterar um pouco essas restrições de segurança e ainda garantir que este acesso seja feito com segurança.
//basicamente ele nao deicha outra acessar ,a nao ser que sejam da mesma origem de solicitaçao 
app.use("/", userRoutes);

//app.listen(3001);

app.listen(8800)
//aqui isso tudo é para abri rotas 