import pool from "./db.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 30699;

app.use(cors());
app.use(express.json());

app.post("/create-data-table", async (req, res) => {
  try {
    const tableName = "data";

    const checkTable = await pool.query(
      `SELECT to_regclass('${tableName}') AS exists`
    );

    if (!checkTable.rows[0].exists) {
      await pool.query(`
        CREATE TABLE ${tableName} (
          id SERIAL PRIMARY KEY,
          name TEXT,
          enrollid TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      return res.status(201).json({ message: "✅ Tabla creada exitosamente" });
    } else {
      return res.status(200).json({ message: "ℹ️ La tabla ya existe" });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

app.post("/savedata", async (req, res) => {
  const tableName = "data";
  const { name, enrollid } = req.body;
  console.log("entra");

  try {
    await pool.query(
      `INSERT INTO ${tableName} (name, enrollid) VALUES ($1, $2)`,
      [name, enrollid]
    );
    return res
      .status(201)
      .json({ message: "✅ Datos insertados correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

app.delete("/deletetable", async (req, res) => {
  try {
    const tableName = "data";

    const checkTable = await pool.query(`SELECT to_regclass($1) AS exists`, [
      tableName,
    ]);

    if (checkTable.rows[0].exists) {
      await pool.query(`
        DROP TABLE ${tableName};
         `);

      return res.status(200).json({ message: "✅ Tabla borrada exitosamente" });
    } else {
      return res
        .status(500)
        .json({ message: " Error al procesar la solicitud" });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});

app.get("/velocidad", (req, res) => {
  res.json({ nombre: "Omar", apellido: "Reyes" });
});

app.get("/unii", (req, res) => {
  res.json({ nombre: "UTLD", ubicacion: "Las cuevas" });
});

app.get("/temperatura", (req, res) => {
  res.json({ valor: "10 °C", timestamp: new Date().toISOString() });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
