const express = require('express'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	cors = require('cors')

const port = process.env.PORT || 3000;
const app = express()

const router = require('./api/strains')

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
		methods: 'GET,PUT,POST,DELETE',
		preflightContinue: false
	})
)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
		extended: true
	})
)
app.use(cookieParser())

app.use(router)

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

