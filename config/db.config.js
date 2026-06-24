import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const db = new Sequelize('defaultdb', 'avnadmin', 'AVNS_JfT9s6nAMQ6Qj8PEQ25', {
      host: "mysql-7cb9ce9-alkharivotito19-55.h.aivencloud.com",
      dialect: "mysql",
      port: 23415,
      dialectOptions: {
        ssl:{
          rejectUnauthorized: false
        }
      },
      "define": {
        "timestamps": false
      }
    });
export default db;

(async()=>{
await db.sync();
})();
