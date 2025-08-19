//const { Pool } = require("pg");
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://iot696999_user:QciHdy4olTdEVhx1wua3S5uWgxX5pB6A@dpg-d2f3bp49c44c73doq48g-a.oregon-postgres.render.com/iot696999",
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
