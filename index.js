const express = require('express')
const app = express()
const mongoose = require('mongoose')

// app.get('/', (req, res) => {
// 	res.send('test website')
// })

const url = 'mongodb+srv://musika:musikadb@cluster0.vulbs.mongodb.net/dbtwo?retryWrites=true&w=majority'
mongoose.connect(url, {
	useNewUrlParser: true
}).then(() => console.log('DB Connected')).catch(err => console.log(err))

app.listen(5000)