const express = require('express')
const app = express()
const port = 8887

app.get('/', (req, res) => res.send('Hello, Node is running on Kubernetes and Docker'))

app.listen(port, () => console.log(`Node is running on Kubernetes and Docker and it's listening on port ${port}!`))