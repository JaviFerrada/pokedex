import axios, { AxiosError, AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const received = await axios.get(
      'https://www.pokemon.com/el/api/pokedex/kalos'
    )
    res.status(200).json({ pokemons: received.data })
  } catch {
    return res.status(500).end('Internal Server Error')
  }
}
