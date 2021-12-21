const express = require('express')
const app = express()
const port = 3000
let booklog = {} //今は単数形の状態で処理をすすめる

app.use(express.json())

app.post('/booklog', (req, res) => {
  booklog = req.body

  if (!(booklog.name && booklog.text)) {
    return res.json({
      ok: false,
      error: 'invalid parameter',
    })
  }

  res.json({
    ok: true,
    booklog: booklog,
  })
})

app.get('/booklog', (req, res) => {
  res.json({
    ok: true,
    booklog: [booklog],
  })
})

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
