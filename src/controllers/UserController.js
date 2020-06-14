const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  /* Método de listagem de todos os dados da tabela */
  async index(request, response) {
    const users = await connection("users").select("*");

    return response.json(users);
  },

  /* Método de cadastro de novos usuários */
  async create(request, response) {
    const { name, email, telefone } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("users").insert({
      id,
      name,
      email,
      telefone,
    });

    return response.json({ id });
  },
};
