import PokemonThumbnail from '@/Components/Card/Card';

export default async  function Pokemons({pokemons}:any) {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24 pt-24">
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
        
    
    </div>)
}
