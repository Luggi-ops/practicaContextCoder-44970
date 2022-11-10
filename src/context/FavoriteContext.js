import React, {createContext, useState} from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item])
    }

    const isFavorite = (item) => {
        const exist = favorites.some(favorite => favorite.id === item.id)
        return exist;
    }

    const removeFavorite = (item) => {
        const newArray = favorites.filter(favorite => favorite.id !== item.id)
        setFavorites(newArray)
    }

    return(
        <FavoriteContext.Provider value={{ addToFavorites, isFavorite, removeFavorite }}> 
            {props.children}
        </FavoriteContext.Provider>
    )
}