import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap';
import { FavoriteContext } from '../context/FavoriteContext';
import { getData } from '../util/getData';
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { addToFavorites, isFavorite, removeFavorite } = useContext(FavoriteContext);

    useEffect(() => {
        
        getData(id)
            .then(res => {
                setData(res)
                setLoading(false)
            })
            
    }, [])

    const addToCart = (count) => {
        console.log("agregado al carrito cantidad", count)
    }

    return (
        <>
        {
            loading?
            <Spinner
                color="primary"
                type="grow"
            ></Spinner>
            :
            <div>
                <h1>{data.name}</h1>
                <img src={data.img} style={{width: "200px"}}/>
                <p>{data.description}</p>
                <p>Stock: {data.stock}</p>
                <p>Precio: {data.price}</p>
                <ItemCount stock={data.stock} addToCart={addToCart}/>

                {
                    isFavorite(data)?
                        <div onClick={ () => removeFavorite(data)}>
                            <i class="fas fa-heart" style={{fontSize: "20px", color: "red"}} />
                        </div>
                        :
                        <div onClick={ () => addToFavorites(data)}>
                            <i class="far fa-heart" style={{fontSize: "20px"}} />
                        </div>
                }
            </div>
        }
            
        </>
    )
}

export default ItemDetail