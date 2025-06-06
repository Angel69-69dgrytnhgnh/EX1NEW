import pool from "./db.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/create-data-table", async (req, res) => {
  try {
    const tableName = "data";

    const checkTable = await pool.query(`⁠SELECT to_regclass($1) AS exists`, [
      tableName,
    ]);

    if (!checkTable.rows[0].exists) {
      await pool.query(`
        CREATE TABLE ${tableName} (
          id SERIAL PRIMARY KEY,
          value TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      return res.status(201).json({ message: "✅ Tabla creada exitosamente" });
    } else {
      return res.status(200).json({ message: "ℹ La tabla ya existe" });
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
