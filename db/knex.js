const environment = process.env.NODE_ENV || "development",
	config = require("../knexfile"),
	environmentConfig = config[environment],
	knex = require("knex"),
	connection = knex(environmentConfig)

module.exports = connection
