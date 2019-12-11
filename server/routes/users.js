const express = require('express')
// importacion de underscore
const _ = require('underscore')

const app = express()
const { Client } = require('pg')

let connectionData = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}

app.get('/user', async (req, res) => {
  let client = new Client(connectionData);
  let query = await client.query('SELECT * FROM person')
  console.log(query.rows)
  return res.json({
    ok: true,
    message: 'nopse'
  })
})
/*
app.post('/user', (req, res) => {
  let body = req.body

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcript.hashSync(body.password, 10),
    role: body.role
  })
  // metodo save para guardar un user en mondoDB
  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      })
    }

    res.json({
      ok: true,
      user: userDB
    })
  })
})
*/
module.exports = app
