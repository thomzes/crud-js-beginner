import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db_js", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
