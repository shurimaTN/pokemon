
import { LoadMore } from '@/Components/Content/LoadMore';
import FirstLoadContent from '@/Components/Content/Pokemons';
import PokeNavbar from '@/Components/NavBar/Navbar';
import { getAllPokemons } from '@/lib/pokemon';
import { SWRProvider } from '@/lib/pokemonProvider';
import { getSessionUser } from '@/lib/session'

export default async  function Home({fallback}:any) {
  const user = await getSessionUser()
  const pokemons = await getAllPokemons()
  return (
    <SWRProvider value={{pokemons}}>
      <PokeNavbar user={user}/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <FirstLoadContent pokemons={pokemons.results}/> 
        <LoadMore/>
      </main>
    </SWRProvider>
  )
}