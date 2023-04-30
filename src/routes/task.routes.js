import { Router } from "express";
import {changeTaskStatus, createTask, deleteTask, editTask, getTasks } from "../controllers/task.controllers.js"
import validateAuth from "../middlewares/validateAuth.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import {taskSchema} from "../schemas/task.schemas.js"

const taskRouter = Router()
taskRouter.use(validateAuth)

taskRouter.post("/tasks", validadeSchema(taskSchema), createTask)
taskRouter.get("/tasks", getTasks)
taskRouter.patch("/tasks/status/:id", changeTaskStatus)
taskRouter.delete("/tasks/:id", deleteTask)
taskRouter.put("/tasks/:id", validateSchema(taskSchema), editTask)

export default taskRouter