const express = require('express')
const PokemonController = require('../controllers/pokemonController')
const router = express.Router()

router.get("/", PokemonController.allPokemon)
router.post("/", PokemonController.addPokemon)
router.get("/:id", PokemonController.pokemonDetail)
router.put("/:id", PokemonController.pokemonEdit)
router.delete("/:id", PokemonController.pokemonDelete)

module.exports = router