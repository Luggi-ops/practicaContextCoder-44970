import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'

const ItemProduct = (props) => {

    const {id, nombre, descripcion, img, precio, stock} = props;

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
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemProduct