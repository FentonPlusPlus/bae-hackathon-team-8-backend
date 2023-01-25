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


router.patch('/bootcampers/:id', async function (req, res) {
    const updatePoints = req.body
  
    const updatedPoints = await updatePointHandler(points, ID)
    res.status(200).json({success: true, payload: updatedPoints})
})