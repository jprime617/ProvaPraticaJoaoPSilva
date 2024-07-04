import { useEffect, useState } from "react"

export default function Clubs() {
    const [clubs, setClubs] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.cartola.globo.com/clubes`)
            const data = await response.json()
            setClubs(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {clubs && (
                <div className="container-C">
                    {Object.values(clubs).map(club => (
                        <div className="Clubes">
                            <img src={club.escudos["60x60"]}/>
                            <p className="titulo">{club.nome}</p>
                            <p>{club.apelido}</p>
                            <p>{club.abreviacao}</p>
                            <br />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}