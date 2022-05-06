import axios from 'axios'
import { useState, useEffect } from 'react'
import { Pokemon } from '../interfaces/pokemon'
import PokemonCard from './pokemonCard'
import styles from '../styles/PokemonList.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const PokemonList = () => {
  const showPokemon = useSelector(
    (state: RootState) => state.pokemon.showPokemon
  )

  const [limit, setLimit] = useState<number>(12)

  const [data, setData] = useState<Pokemon[]>([])
  const [isLoading, setLoading] = useState(false)

  const [showData, setShowData] = useState<Pokemon[]>([])

  const filterData = (data: Pokemon[]) => {
    return data.filter(
      (value, index, self) =>
        index === self.findIndex(t => t.number === value.number)
    )
  }

  useEffect(() => {
    const getPokemonList = async () => {
      setLoading(true)
      await axios
        .get('/api/getPokemonList')
        .then(({ data }: { data: { pokemons: Pokemon[] } }) => {
          const filteredData = filterData(data.pokemons)
          setData(filteredData)
          setShowData(
            filteredData
              .sort((a, b) => (a.number > b.number ? 1 : -1))
              .slice(0, limit)
          )
          setLoading(false)
        })
    }
    getPokemonList()
  }, [])

  useEffect(() => {
    if (showPokemon == 'normal' || showPokemon == 'ascNumber') {
      setShowData(
        data.sort((a, b) => (a.number > b.number ? 1 : -1)).slice(0, limit)
      )
    } else if (showPokemon == 'shuffle') {
      setShowData(data.sort(() => 0.5 - Math.random()).slice(0, limit))
    } else if (showPokemon == 'descNumber') {
      setShowData(
        data.sort((a, b) => (a.number < b.number ? 1 : -1)).slice(0, limit)
      )
    } else if (showPokemon == 'AZ') {
      setShowData(
        data.sort((a, b) => (a.name > b.name ? 1 : -1)).slice(0, limit)
      )
    } else if (showPokemon == 'ZA') {
      setShowData(
        data.sort((a, b) => (a.name < b.name ? 1 : -1)).slice(0, limit)
      )
    }
  }, [showPokemon, limit])

  const loadMorePokemons = () => {
    setLimit(limit + 12)
  }

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-3 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : !data ? (
          <p>No data</p>
        ) : (
          showData.map((pokemon: Pokemon) => <PokemonCard pokemon={pokemon} />)
        )}
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
