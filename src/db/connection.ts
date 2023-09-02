import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "12345678",
    database: "tests",
    logging: false
});

export default connection;
