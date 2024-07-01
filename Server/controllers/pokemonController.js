const { Pokemon } = require("../models/");

module.exports = class PokemonController {
  static async addPokemon(req, res, next) {
    try {
      const { name, stat, type, ability, imageUrl, price } = req.body;

      const create = await Pokemon.create({ name, stat, type, ability, imageUrl, price });

      res.status(201).json(create);
    } catch (error) {
      next(error);
    }
  }

  static async allPokemon(req, res, next) {
    try {
      const data = await Pokemon.findAll();

      if (!data) {
        throw { name: "NotFound" };
      }

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async pokemonDetail(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Pokemon.findByPk(id);

      if (!data) {
        throw { name: "NotFound" };
      }

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async pokemonEdit(req, res, next) {
    try {
      const { id } = req.params;
      const { name, stat, type, ability, imageUrl, price } = req.body;

      const data = await Pokemon.findByPk(id);

      if (!data) {
        throw { name: "NotFound" };
      }

      const edit = await Pokemon.update(
        { name, stat, type, ability, imageUrl, price },
        {
          where: {
            id,
          },
        }
      );

      const newData = await Pokemon.findByPk(id)
      res.status(200).json(newData);

    } catch (error) {
      next(error);
    }
  }

  static async pokemonDelete(req, res, next) {
    try {
      const { id } = req.params;
      const find = await Pokemon.findByPk(id);

      if (!find) {
        throw { name: "NotFound" };
      }

      await Pokemon.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: `${find.name} is deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
};
