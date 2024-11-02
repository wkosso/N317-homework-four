"use client";

import pageStyles from "@/app/page.module.css";
import PokemonSearch from "@/app/components/searchPokemon";

export default function Search() {
  return (
    <div className={pageStyles.searchContainer}>
      <div className={pageStyles.searchImage}></div>
      <div className={pageStyles.searchHeader}>Find Your Pokémon.</div> 
      <div className={pageStyles.searchSubtext}>
        Who’s that Pokémon? Search by name, egg-group, or Pokémon habitat to find out!
      </div>

      <PokemonSearch />
    </div>
  );
}
