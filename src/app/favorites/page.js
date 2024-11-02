"use client"

import { useFavorites } from '@/app/components/pokemonFav';



const FavoritesPage = () => {
  const { favorites, addFavorite } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.img} alt={pokemon.name} />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

