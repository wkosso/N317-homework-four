"use client";
import usePokemonApi from "@/app/hooks/usePokemonApi";
import { useEffect } from "react";
import PokemonRandomImage from "./components/randomPokemon";
import Link from "next/link"; // Import the Link component
import pageStyles from "@/app/page.module.css";

export default function Home() {
  const pokeData = usePokemonApi();

  useEffect(() => {
    if (pokeData.totalPokemonCount === 0) {
      pokeData.getNumberOfPokemon();
    }
    if (!pokeData.randomPokemon.length) {
      pokeData.getRandomPokemon(5);
    }
  }, [pokeData]);

  const randomPokemonListJsx = pokeData.randomPokemon.map(function (pokemon) {
    const quickInfo = pokeData.getPokemonQuickInfo(pokemon);
    return (
      <Link key={`poke-link-${quickInfo.id}`} href={`/pokemon/${quickInfo.id}`}>
        <PokemonRandomImage
          name={quickInfo.name}
          img={quickInfo.img}
          types={quickInfo.types}
        />
      </Link>
    );
  });

  return (
    <main>
      <div className={pageStyles.headercontainer}>
        <div className={pageStyles.headerImage}>
          <h1 className={pageStyles.headText}>Discover Random Pokémon.</h1>
        </div>
        <div className={pageStyles.introText}>
          Ready to dive into the excitement of discovering new Pokémon? Every visit here brings a fresh lineup of unique Pokémon for you to explore. From classic favorites to hidden gems, each one has its own personality, powers, and story!
        </div>
        <div className={pageStyles.callAction}>
          Want more? Refresh the page and see a whole new set of Pokémon!
        </div>
        <div className={pageStyles.mainContent}>
          <section>{randomPokemonListJsx}</section>
        </div>
      </div>
    </main>
  );
}
