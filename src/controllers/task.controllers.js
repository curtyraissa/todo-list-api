import dayjs from "dayjs"
import { db } from "../database/database.config.js"

export async function createTask(req, res){
    const {description} = req.body
    try {
        const task = {description, date: dayjs().valueOf(), done:false}
        await db.collection("tasks").insertOne(task)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTasks(req, res){
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function changeTaskStatus(req, res){
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteTask(req, res){
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function editTask(req, res){
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}