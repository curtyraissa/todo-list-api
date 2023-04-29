import { Router } from "express";
import {changeTaskStatus, createTask, deleteTask, editTask, getTasks } from "../controllers/task.controllers.js"

const taskRouter = Router()

taskRouter.post("/tasks", createTask)
taskRouter.get("/tasks", getTasks)
taskRouter.patch("/tasks/status/:id", changeTaskStatus)
taskRouter.delete("/tasks/:id", deleteTask)
taskRouter.put("/tasks/:id", editTask)

export default taskRouter