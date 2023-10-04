import PokemonThumbnail from '@/Components/Card/Card';
import { getPokemon } from '@/lib/pokemon'
import React from 'react'
import PokeNavbar from '@/Components/NavBar/Navbar';
import { getSessionUser } from '@/lib/session'
import { getCommentsForPokemon } from '@/lib/queries/comment';
import Comment from './comment';

export default async  function page({params}: any) {
    const pokemon = await getPokemon(params.id)
    const user = await getSessionUser();
    const comments = await getCommentsForPokemon(params.id)
  return (
    <div className='flex  flex-col'>
      <PokeNavbar user={user}/>
      <div className='flex flex-row pl-40 pt-40'>
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
        <div className='h-auto w-[40vw]  ml-10 mt-10 flex flex-col p-4'>
          {
            comments.map((comment,idx)=>(<div key={"comm"+idx} className={`relative ${['rock', 'ghost', 'electric', 'bug', 'poison', 'normal', 'fairy', 'fire', 'grass', 'water','ground' ][Math.floor(Math.random()*10)]} bg-blue-500 text-white p-4 rounded-lg shadow-md mb-2`}>
            <div className="absolute top-0 -mt-2 w-0 h-0 border-t-2 border-blue-500 border-solid border-l-4 border-transparent"></div>
            <p>
              <span className="font-bold">{comment.username}</span> commented: {" "} 
              {comment.content}
            </p>
          </div>
          ))
          }
          <Comment user={user} pokemon={params.id}/>
        </div>
        </div>
    </div>
  )
}