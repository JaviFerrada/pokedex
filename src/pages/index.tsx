import type { NextPage } from 'next'
import Head from 'next/head'
import Filter from '../components/filter'
import OrderByBar from '../components/orderByBar'
import PokemonList from '../components/pokemonList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pokédex | Pokemon.com </title>
        <link rel="icon" href="/pokemon.ico" />
      </Head>

      <main className={`${styles.main} md:container md:mx-auto`}>
        <div className={styles.contentWrapper}>
          <h1 className={`${styles.titlePage} pt-12 p-4 m-3`}>Pokédex</h1>
          <Filter />
          <OrderByBar />
          <PokemonList />
        </div>
      </main>
    </div>
  )
}

export default Home
