import React, { useState, useEffect, useReducer } from 'react'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) =>{
    switch(action.type){
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state
    }
}

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
            .then( response => response.json())
            .then( data => setCharacters(data.results) )
    },[])

    const handleClick = favorite => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite })
    }

    return (
        <div className='characters'>
            {favorites.favorites.map(favorite =>(
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}
            
            {characters.map(character => (
                <div key={character.id} className="character">
                    <div className="character__container">
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div className="character__details">
                        <h3>{character.name}</h3>
                        <p>{character.species}</p>
                        <p>{character.location.name}</p>
                        <button type='button' onClick={()=> handleClick(character)}>Agregar a favoritos</button>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Characters