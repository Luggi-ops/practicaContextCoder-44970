import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import { FavoriteContext } from '../context/FavoriteContext';

const ItemProduct = (props) => {

    const {id, nombre, descripcion, img, precio, stock, data} = props;
    const { addToFavorites, isFavorite, removeFavorite } = useContext(FavoriteContext);

    const togleFavorite = () => {
        if(isFavorite(data)){
            removeFavorite(data)
        }else{
            addToFavorites(data)
        }
    }
    
    return (
        <>
            <Card
                className="my-2"
                style={{
                    width: '18rem'
                }}
            >
                <img src={img} style={{height: "15rem", objectFit: "cover",}}/>
                <CardBody>
                    <CardTitle tag="h5">
                        {nombre}
                    </CardTitle>
                    <CardText>
                        {descripcion}
                    </CardText>
                    <Button>
                        <Link to={`productos/${id}`}>
                            Ver detalle
                        </Link>
                    </Button>
                </CardBody>
                <CardFooter>
                    Stock {stock}
                    $ {precio}
                    {/* {
                        isFavorite(data)?
                            <div onClick={ () => removeFavorite(data)}>
                                <i class="fas fa-heart" style={{fontSize: "20px", color: "red"}} />
                            </div>
                            :
                            <div onClick={ () => addToFavorites(data)}>
                                <i class="far fa-heart" style={{fontSize: "20px"}} />
                            </div>
                    } */}

                        <div onClick={ togleFavorite }>
                            <i class={isFavorite(data)? "fas fa-heart" : "far fa-heart"} style={{fontSize: "20px", color: isFavorite(data)? "red" : "black"}} />
                        </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemProduct