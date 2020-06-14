const connection = require("../database/connection");

module.exports = {
  /* List payments */
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("payments").count();

    const payments = await connection("payments").select("payments.*");

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(payments);
  },

  /* Create payments */
  async create(request, response) {
    const { title, value, date, comments } = request.body;

    const external_tax = value * 0.05;

    const [id] = await connection("payments").insert({
      title,
      value,
      date,
      external_tax,
      comments,
    });

    return response.json({ id });
  },

  /* Update payments */
  async update(request, response) {
    const { id } = request.params;

    const data = request.body;

    await connection("payments").where("id", id).update(data, ["id", "data"]);

    return response.status(204).send();
  },

  /* Delete payments */
  async delete(request, response) {
    const { id } = request.params;

    await connection("payments").where("id", id).delete();

    return response.status(204).send("The payment was deleted");
  },
};
