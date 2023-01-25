import  pg  from 'pg'
 const pool = new pg.Pool({
    connectionString:
   "postgres://mxvylmmj:U0icnBo9dF0JKdB9jzrNjCsrCDbH0Hxn@kandula.db.elephantsql.com/mxvylmmj"
})

export { pool }
