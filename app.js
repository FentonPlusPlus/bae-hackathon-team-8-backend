
import express from 'express'


import cors from 'cors'


const app = express();

import { router } from "./routes/points.js"


app.use(cors())
app.use(express.json());


app.use("/api", router)
export { app }

