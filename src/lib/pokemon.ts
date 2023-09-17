export const getAllPokemons = async (page="https://pokeapi.co/api/v2/pokemon?limit=20") => {
    const res = await fetch(page);
    const data = await res.json();
    
    return {...data,results:(await Promise.allSettled(data.results.map(async (pokemon:any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data1 = await res.json();
        return data1;
      }))).map((p:any)=>p?.value)}
  };
export const getPokemon = async (id:string) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
    const data = await res.json();
    return data;
  };