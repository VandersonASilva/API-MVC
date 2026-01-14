import app from "./app.js";
import { db } from "../models/index.js";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await db.authenticate();
    console.log("Banco conectado com sucesso.");

    await db.sync();
    console.log("Tabelas verificadas e criadas com sucesso.");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    process.exit(1);
  }
};

startServer();
