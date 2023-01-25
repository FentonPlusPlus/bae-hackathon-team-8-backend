import express from 'express'
export const router = express.Router()

import {
    getPoints,
    updatePointHandler
} from "../models/points.js"


router.get('/points', async (req, res) => {
    const points = await getPoints();
    return res.json({ success: true, payload: points})
})


router.patch('/points/:id', async function (req, res) {
    const ID = req.params.id
    const updatePoints = req.body
    console.log(updatePoints)
    const updatedPoints = await updatePointHandler(updatePoints, ID)
    res.status(200).json({success: true, payload: updatedPoints})
})