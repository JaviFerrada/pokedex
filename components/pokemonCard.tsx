import { Pokemon } from '../src/interfaces/pokemon'
import styles from '../styles/PokemonCard.module.css'
import Tag from './tag'

interface CardProps {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: CardProps) => {
  return (
    <div className="mb-10">
      <img src={pokemon.ThumbnailImage} className={`${styles.image} rounded`} />
      <div className={styles.pokemonInfo}>
        <p className={styles.number}>N.°{pokemon.number}</p>
        <h5 className={styles.name}> {pokemon.name} </h5>
      </div>
      <div className="pl-2 flex justify-start">
        {pokemon.type.map((typeName: string) => (
          <Tag text={typeName} />
        ))}
      </div>
    </div>
  )
}

export default PokemonCard
