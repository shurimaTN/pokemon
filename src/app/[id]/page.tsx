import PokemonThumbnail from '@/Components/Card/Card';
import { getPokemon } from '@/lib/pokemon'
import React from 'react'

type Props = {}

export default async  function page({params}: any) {
    const pokemon = await getPokemon(params.id)
  return (
    <div className='flex  flex-col'>
        <PokemonThumbnail
            id={pokemon.id}
            name={pokemon.name}
            image=
        {pokemon?.sprites?.other?.home?.front_default || pokemon?.sprites?.other?.dream_world?.front_default}
            type={pokemon?.types[0].type.name}
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
    </div>
  )
}