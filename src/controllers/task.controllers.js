import dayjs from "dayjs"
import { db } from "../database/database.config.js"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { ObjectId } from "mongodb"
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
    const {id} = req.params
    try {
        const task = await db.collection("tasks").findOne({_id: new ObjectId(id)})
        if (!task) return res.sendStatus(404)

        await db.collection("tasks").updateOne(
            {_id: new ObjectId(id)},
            {$set: {done: !task.done}}
        )
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteTask(req, res){
    const {id} = req.params
    try {
        await db.collection("tasks").deleteOne({_id: new ObjectId(id)})
        if(task.deletedCount === 0) return res.sendStatus(404)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function editTask(req, res){
    const {id} = req.params
    const {description} = req.body

    try {
       const task = await db.collection("tasks").updateOne(
            {_id: new ObjectId(id)},
            {$set: {description}}
        )
        if(task.matchedCount === 0) return res.sendStatus(404)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}