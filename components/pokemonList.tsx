import axios from 'axios'
import { useState, useEffect } from 'react'
import { Pokemon } from '../interfaces/pokemon'
import PokemonCard from './pokemonCard'
import styles from '../styles/PokemonList.module.css'

const PokemonList = () => {
  const [limit, setLimit] = useState<number>(12)

  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const getPokemonList = async () => {
      setLoading(true)
      await axios
        .get('/api/getPokemonList')
        .then(({ data }: { data: { pokemons: Pokemon[] } }) => {
          const groupPokemons = data.pokemons.reduce(
            (list: any, item: Pokemon) => {
              const { number } = item
              list[number] = list[number] ?? []
              list[number].push(item)
              return list
            },
            {}
          )
          setData(groupPokemons)
          setLoading(false)
        })
    }
    getPokemonList()
  }, [])

  const loadMorePokemons = () => {
    setLimit(limit + 12)
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-3 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {Object.keys(data)
          .sort()
          .slice(0, limit)
          .map((key: string) => (
            <PokemonCard pokemons={data[key]} />
          ))}
      </div>
      <div className="w-full flex justify-center mb-5">
        <button
          className={`${styles.buttonLightblue} py-2 px-4 rounded`}
          onClick={loadMorePokemons}
        >
          Cargar más Pokémon
        </button>
      </div>
    </>
  )
}

export default PokemonList
