import { useState, useEffect } from 'react'

export default function useFetchOnePiece(tipo) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = ""
        if (tipo === "personajes") endpoint = "/characters"
        if (tipo === "tripulaciones") endpoint = "/crews"
        if (tipo === "barcos") endpoint = "/ships"

        const respuesta = await fetch(`https://api-onepiece.com${endpoint}`)
        const datos = await respuesta.json()
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