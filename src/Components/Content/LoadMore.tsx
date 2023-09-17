"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Pokemons from "./Pokemons";
import { getAllPokemons } from "@/lib/pokemon";
import PokemonThumbnail from '@/Components/Card/Card';
export function LoadMore() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState<string>("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");

  const { ref, inView } = useInView();


  const loadMoreBeers = async () => {
   if(!page) return;
    const newPokemons = (await getAllPokemons(page)) ?? [];
    setPokemons((prevPokemons: any[]) => [...prevPokemons, ...newPokemons.results]);
    setPage(newPokemons.next);
  };

  useEffect(() => {
    (()=>{if (inView) {
      loadMoreBeers();
    }})()
  }, [inView]);

  return (
    <><div className="flex min-h-screen flex-col items-center justify-between px-24">
        <div className="all-container">
      {pokemons.map((pokemon:any, index:any) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image=
      {pokemon?.sprites?.other?.home?.front_default || pokemon?.sprites?.other?.dream_world?.front_default}
              type={pokemon?.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0]?.stat?.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
          </div>
          </div>
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        Loading
      </div>
    </>
  );
}