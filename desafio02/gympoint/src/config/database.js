import dotenv from 'dotenv/config';

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
<<<<<<< HEAD
  port: 5432,
=======
  port: process.env.DB_PORT,
>>>>>>> 9a2da7e16dd0034d1598cce97560ae896ad2dc29
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
