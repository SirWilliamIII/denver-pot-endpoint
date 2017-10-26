const knex = require('./knex')

module.exports = {

	getStrains() {
		return knex('strains')
	},

	getStrainById(id) {
		return knex('strains').where('id', id).first()
	},

	addStrain(strain) {
		return knex('strains').insert(strain)
	},

	updateStrain(strain) {
		return knex('strains').where('id', strain.id)
	},

	deleteStrainById() {
		return knex('strains').where('id', strain.id).del()
	}
}