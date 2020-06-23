let express = require('express')
let fs = require('fs')
let layouts = require('express-ejs-layouts')
let methodOverride = require('method-override')

let app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(layouts)
// Body-parser
app.use(express.urlencoded({extended: false}))
// Method-Override will allow us to use PUT & DELETE routes
app.use(methodOverride('_method'))

app.use('/dogs', require('.controllers/dogs'))

app.get('/', (req, res) => {
    res.render('home')
})
    // let dogs = fs.readFileSync('./dogs.json')
    // dogs = JSON.parse(dogs)
    // dogs.push(req.body)


app.listen(3000, () => {console.log("I don't get this!!!!🤯🥵")})