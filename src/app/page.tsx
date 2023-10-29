
import { LoadMore } from '@/Components/Content/LoadMore';
import FirstLoadContent from '@/Components/Content/Pokemons';
import PokeNavbar from '@/Components/NavBar/Navbar';
import { getAllPokemons } from '@/lib/pokemon';
import { getSessionUser } from '@/lib/session'

export default async  function Home() {
  const user = await getSessionUser();
  const pokemons = await getAllPokemons();
  return (
    <>
      <PokeNavbar user={user}/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <FirstLoadContent pokemons={pokemons.results}/> 
        <LoadMore/>
      </main>
    </>
  )
}