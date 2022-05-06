// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try{
    console.log("LLAMANDO...")
    const received = await axios.get('https://www.pokemon.com/el/api/pokedex/kalos')
    console.log("DATA", res)
    res.status(200).json({ pokemons: received.data })
  } catch (error: any) {
     console.error(error)
     return res.status(error.status || 500).end(error.message)
   }
}
