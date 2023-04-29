import { MongoClient } from "mongodb"
import dotenv from "dotenv"

// Conexão com o Banco de Dados
dotenv.config()
const mongoClient = new MongoClient(process.env.DATABASE_URL)
try {
await mongoClient.connect()
console.log("MongoDB conectado!")
} catch (err) {
console.log(err.message)
}
  export const db = mongoClient.db()
