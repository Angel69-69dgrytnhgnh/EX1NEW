const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://root:KF3OfYzZgS9t1ZqQa7Y2zjlKC3NDLbmA@dpg-d0vkmf95pdvs738kbrs0-a.oregon-postgres.render.com/iot69",
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
testConection();
