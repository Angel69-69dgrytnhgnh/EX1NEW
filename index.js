const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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
