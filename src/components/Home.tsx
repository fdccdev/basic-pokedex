import { useEffect, useState } from 'react'
import { Header } from './ui/Header'
import { Main } from './ui/Main'
import { getDataPokemons } from '../services/fetchData'

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [query, setQuery] = useState('')

  const getAllPokemons = async () => {
    let pokes: [] = []
    if(JSON.parse(window.localStorage.getItem('pokemons_data') || '') === null){
      pokes = await getDataPokemons()
      setPokemons(pokes)
    } else {
      pokes = JSON.parse(window.localStorage.getItem('pokemons_data') || '')
      console.log(pokes)    
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
