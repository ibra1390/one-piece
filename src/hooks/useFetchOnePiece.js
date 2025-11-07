import { useState, useEffect } from 'react'

export default function useFetchOnePiece(tipo) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = ''
        if (tipo === 'personajes') endpoint = '/v2/characters/en'
        if (tipo === 'tripulaciones') endpoint = '/v2/crews/en' 
        if (tipo === 'barcos') endpoint = '/v2/ships/en'

        const respuesta = await fetch(`https://api.api-onepiece.com${endpoint}`)
        const datos = await respuesta.json()
        
        console.log('DATOS OBTENIDOS:', datos)
        setData(datos)
      } catch (error) {
        console.log('Error:', error)
      } 
    }

    if (tipo) {
      fetchData()
    }

  }, [tipo])

  return { data, setData }
}