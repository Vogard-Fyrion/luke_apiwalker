import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Planet = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planet?
                <div>
                    <h1>{planet.name}</h1>
                    <h4>Climate: {planet.climate}</h4>
                    <h4>Terrain: {planet.terrain}</h4>
                    <h4>Gravity: {planet.gravity}</h4>
                    <h4>Population: {planet.population}</h4>
                </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src="https://cf.geekdo-images.com/camo/3bd257105ee45a87f586c848ff13a15e52ef8e6b/687474703a2f2f7777772e6a6173656d6363617274792e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031322f30372f6f626977616e2d6172656e7474686564726f6964732e6a7067" alt="" />
                </div>
        }
        </div>
    )
}

export default Planet