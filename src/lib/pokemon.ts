export const getAllPokemons = async (page="https://pokeapi.co/api/v2/pokemon?limit=20") => {
    const res = await fetch(page);
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json().catch(e=>({}));
    
    return {...data,results:(await Promise.allSettled(data.results.map(async (pokemon:any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
        const data1 = await res.json().catch(e=>({}));
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