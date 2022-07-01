import express from "express"
import users from "./text.js"


const app = express()
const port = 3000
// const passport = require('passport')

// const initializePassport = require('./pass-config')
// initializePassport(passport)


function findAverageOnly(userarray) {
    let sum = 0
    for(let i=0;i<userarray.length; i++) {
        sum = sum + userarray[i].score
    }
    sum = Math.floor(sum / (userarray.length+1))
    return sum
}
function findAboveAvrg(userarray){
    let sum1 = 0
    for(let i=0; i<userarray.length; i++) {
        if(userarray[i].score>= sum1) {
            sum1 = sum1 + 1
        }
    }
    return sum1
}


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))    

app.get('/', function(req, res) {
    res.render('index.ejs')
})

app.get('/a', function(req, res) {
    res.send(users)
})

app.get('/avrg', function(req, res) {
    res.send('Angiin average = '+findAverageOnly(users)+"%, Dundajaas ih avsan huuhdiin too - "+ findAboveAvrg(users))
})

app.get('/login', function(req, res) {
    res.render('exam1.ejs')
})

app.get('/signup', function(req, res) {
    res.render('exam2.ejs')
})

app.post('/signup', function(req, res) {
    try {
        users.push({
            name: req.body.name,
            password: req.body.password, 
            score: req.body.score,
            age: req.body.age
        })
        res.redirect('/login')
    } catch {
        req.redirect('/signup')
    }
    console.log(users)
})



app.listen(port, ()  => console.log("running..."))