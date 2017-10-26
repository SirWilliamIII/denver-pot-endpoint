module.exports = {
  development: {
    client: "pg",
    connection: 'postgres://localhost/strains'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

//just a comment
