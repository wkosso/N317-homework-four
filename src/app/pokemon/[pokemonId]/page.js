"use client";
import { useEffect, useState } from 'react';
import pokeDetails from "@/app/pokemon/[pokemonId]/pokemonDetails.module.css";
export default function PokemonDetails({ params }) {
  const { pokemonId } = params; // Get the Pokémon ID from the URL parameters
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (pokemonId) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => {
          if (!response.ok) throw new Error("Pokémon not found");
          return response.json();
        })
        .then((data) => {
          setPokemonDetails(data);
        })
        .catch((error) => {
          console.error(error);
          setPokemonDetails(null);
        });
    }
  }, [pokemonId]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <h3>Types:</h3>
      <ul>
        {pokemonDetails.types.map((typeInfo) => (
          <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
        ))}
      </ul>
      <h3>Stats:</h3>
      <ul>
        {pokemonDetails.stats.map((statInfo) => (
          <li key={statInfo.stat.name}>
            {statInfo.stat.name}: {statInfo.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );

}
