import { useEffect, useState } from 'react'
import { Header } from './ui/Header'
import { Main } from './ui/Main'
import { getDataPokemons } from '../services/fetchData'
import { Pokemon } from '../types/types'


const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([])
  const [query, setQuery] = useState<string>('')

  const getAllPokemons = async () => {
    let pokes: [] = []
    if(JSON.parse(localStorage.getItem('pokemons_data')!) === null){
      pokes = await getDataPokemons()
      setPokemons(pokes)
    } else {
      pokes = JSON.parse(localStorage.getItem('pokemons_data')!)
      setPokemons(pokes)      
    }
  }

  useEffect(() => {
    getAllPokemons()
    setIsLoading(!isLoading)
  }, [])

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      {isLoading ? 'Cargando...' : <Main pokemons={pokemons} query={query}/>}
    </>
  )
}

export default Home
