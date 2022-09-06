const express = require("express");
const router = express.Router();
const Deseo = require("./models/Deseo.js");

module.exports = () => {
  router.get("/get-deseo/:email", async (req, res) => {
    const deseos = await Deseo.findAll({
      where: { user_email: req.params.email },
    });
    res.send(deseos);
  });

  router.post("/post-deseo", async (req, res) => {
    const { descripcion, user_email } = req.body;
    try {
      await Deseo.create({ descripcion, user_email });
      res.send("Deseo gurdado.");
    } catch (e) {
      res.send(e.errors[0].message);
    }
  });

  router.delete("/delete-deseo/:id", async (req, res) => {
    const iCount = await Deseo.count();
    try {
      await Deseo.destroy({ where: { _id: req.params.id } });
      const uCount = await Deseo.count();
      if (uCount >= iCount) {
        res.send("No se pudo eliminar");
      }
    } catch (e) {
      res.send("No se pudo eliminar el deseo");
    }
  });

  return router;
};
