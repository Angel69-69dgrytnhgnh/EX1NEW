//const { Pool } = require("pg");
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://iot6969_user:cOI6bFkQg1HzhxAU2NUkrNNtl4tzEOWw@dpg-d1qjaq8dl3ps73908amg-a.oregon-postgres.render.com/iot6969",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
/*
async function testConection() {
  try {
    const client = await pool.connect();
    console.log("Conexion exitosa");
    client.release();
    await pool.end();
  } catch (err) {
    console.err("Error al conectar", err);
  }
}
*/
