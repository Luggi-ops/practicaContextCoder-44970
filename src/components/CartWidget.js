import React from 'react'
import { Badge, Button } from 'reactstrap'

const CartWidget = () => {
    return (
        <div>
            <Button
                color="primary"
                outline
            >
                Carrito
                <Badge>
                    4
                </Badge>
            </Button>
        </div>
    )
}

export default CartWidget