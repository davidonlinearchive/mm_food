const express = require('express')
const app = express()
const port = 1738

const courses = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Math'},
    {is: 3, name: 'science'},
]

//app module has all the http requests
app.get('/', (req, res) => {
    res.send('Tu eres mi amigo!')
})

// get courses
app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5])
})

//get course by id 
app.get('api/courses/:id', (req, res) =>{
    res.send(req.query)
})

app.post()

app.listen(port, () => console.log(`Listen on port ${port}`))