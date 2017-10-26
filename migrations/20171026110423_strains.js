exports.up = (knex, Promise) => {
  return knex.schema.createTable('strains', table => {
    table.increments('id').primary()
    table.text('image').notNullable()
    table.text('name').notNullable()
	table.text('class').nullable()
	table.text('effects').nullable()
    table.text('description').notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('strains')
}

