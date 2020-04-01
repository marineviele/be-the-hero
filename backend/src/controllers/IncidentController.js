const connection = require("../database/connection");

module.exports = {
  /** Get all Incidents; return 5 incidents per page */
  async index(req, res) {
    const { page = 1 } = req.query;

    /** Return total counts in header */
    const [count] = await connection("incidents").count();
    res.header("x-total-count", count["count(*)"]);

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    return res.json(incidents);
  },

  /** Insert Incident */
  async create(req, res) {
    const { title, description, value } = req.body;

    console.log(req.headers);
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },

  /** Delete a specific Incident */
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operation not permited" });
    }

    await connection("incidents")
      .where("id", id)
      .delete(id);

    return res.status(204).send(); //resposta com sucesso mas sem conteúdo
  }
};
