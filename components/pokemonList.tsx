import { useState, useEffect } from 'react'
import { Pokemon } from '../interfaces/pokemon'
import PokemonCard from './pokemonCard'

const PokemonList = () => {
  const [limit, setLimit] = useState<number>(12)

  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://www.pokemon.com/el/api/pokedex/kalos', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
      .then(res => res.json())
      .then(res => {
        const groupPokemons = res.reduce((list: any, item: Pokemon) => {
          const { number } = item
          list[number] = list[number] ?? []
          list[number].push(item)
          return list
        }, {})
        setData(groupPokemons)
        setLoading(false)
      })
  }, [])

  const loadMorePokemons = () => {
    setLimit(limit + 12)
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div className={`grid grid-cols-4 gap-3 p-8`}>
      {Object.keys(data)
        .sort()
        .slice(0, limit)
        .map((key: string) => (
          <PokemonCard pokemons={data[key]} />
        ))}
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadMorePokemons}
        >
          Cargar más
        </button>
      </div>
    </div>
  )
}

export default PokemonList
