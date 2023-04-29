import dayjs from "dayjs"
import { db } from "../database/database.config.js"
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(customParseFormat)

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
    const {filterDate} = req.body
    const timestamp = dayjs(filterDate, "DD-MM-YYYY").valueOf()
    try {
        const tasks = await db.collection("tasks")
        .find({date:{$gte:timestamp || 0}})
        .toArray()
        res.status(200).send(tasks)
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