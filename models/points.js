import { pool } from "../db/index.js"

export async function getPoints() {
  
    const data = await pool.query("SELECT * FROM points;")
   
    return [data.rows];
  }


  export async function updatePointHandler(points, ID) {
  
    const AddedPoints = await pool.query (`UPDATE points SET points=$1 WHERE id=$2 RETURNING *;`,[points, ID])
    const AddedPointObject = AddedPoints.rows
    return AddedPoints.rows
  }