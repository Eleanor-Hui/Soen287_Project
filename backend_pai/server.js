const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('../Soen287_final version'));

const users = []
const bcrypt = require('bcrypt')

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {

    res.render('index.ejs', { name: 'Kyle'})
})

app.post('/login', (req,res) => {
    
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
} )

app.get('/register', (req, res) => {
    res.render('register.ejs')
} )

app.post('/register', async (req,res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword,
        })
        res.redirect('/register')
    } catch{
        res.redirect('/register')
        console.log("failed")
    }
    console.log(users)
})

app.listen(3000)