import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

//essas portas aqui é muito importante
router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

//alguma coisa ta erada
//era esse get ....se era post....e eu ti nha colocado tudo post
//aprenda a apesquisar as funçoes pra saber o que ta dando errado
//o tempo inteiro o poblema estava aqui....nessas rotas 
//para arodar tem que dar yarn start no front e no api ....e o yarn start no 3000
