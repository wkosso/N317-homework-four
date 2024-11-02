"use client";

import { useState } from "react";
import searchStyles from "@/app/components/search.module.css";

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState({ sprites: {}, species: {} });
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonHabitat, setPokemonHabitat] = useState("");
  const [pokemonEgg, setPokemonEgg] = useState("");

  function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  }

  async function searchForPokemonByName() {
    try {
      const rawData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      if (!rawData.ok) throw new Error("Pokemon not found");
      const pokeDataFormatted = await rawData.json();
      setPokemon(pokeDataFormatted);

      
      const speciesData = await fetch(pokeDataFormatted.species.url);
      const speciesFormatted = await speciesData.json();

      setPokemonHabitat(speciesFormatted.habitat?.name || "Unknown"); 
      setPokemonEgg(
        speciesFormatted.egg_groups?.map((group) => group.name).join(", ") || "Unknown"
      );
    } catch (error) {
      setPokemon({ name: searchTerm, sprites: {} });
      setPokemonHabitat("");
      setPokemonEgg("");
      alert("Pokemon not found. Please try again."); 
    }
  }

  return (
    <main>
      <div className={searchStyles.search}>
        <input
          type="search"
          id="search"
          name="search"
          value={searchTerm}
          onChange={changeSearchTerm}
        />
        <input type="button" value="Search" onClick={searchForPokemonByName} />
      </div>
      <h3>{pokemon.name}</h3>
      {pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}

      {pokemonHabitat && <h3>Habitat: {pokemonHabitat}</h3>}
      {pokemonEgg && <h3>Egg Group: {pokemonEgg}</h3>}
    </main>
  );
}
