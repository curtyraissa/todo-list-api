import joi from "joi"

export const tasksSchema = joi.object({
description: joi.string().required()
})
//task
//_id
//description
//done
//date
//userID