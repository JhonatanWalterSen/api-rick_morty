import React, { useState, useEffect } from 'react'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
            .then( response => response.json())
            .then( data => setCharacters(data.results) )
        },[])

    return (
        <div className='characters'>
            {characters.map(characters => (
                <div className="character">
                    <div className="character__container">
                        <img src={characters.image} alt={characters.name} />
                    </div>
                    <div className="character__details">
                        <h3>{characters.name}</h3>
                        <p>{characters.species}</p>
                        <p>{characters.location.name}</p>
                    </div>
                </div>
            ))}

            {console.log(characters)}
        </div>
    )
}

export default Characters