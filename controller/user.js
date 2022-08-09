const model = require('../models');
const categoria = model.User;

module.exports = {
  async index(request, response) {
    try {
      const { page } = request.params;
      const limite = 25;

      const Categoria = await categoria.findAndCountAll({
        order: [
          ['id', 'ASC']
        ],
        limit: limite,
        offset: parseInt(page)
      })

      return response.status(200).json(Categoria);

    } catch (err) {
      return response.status(400).json("Erro ao listar categorias " + err);
    }
  }
}
