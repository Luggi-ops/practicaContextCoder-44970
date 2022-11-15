import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { getData } from '../util/getData';
import ItemProduct from './ItemCard';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData()
        .then(res => {
            setData(res);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
    }, [])

    return (
        <>
        {
            loading? 
                <Spinner
                    color="primary"
                    type="grow"
                ></Spinner>
                :
                <div className="row">
            
                    {
                        data.map((product) => (
                            <div className="col-4" key={product.id}>
                                <ItemProduct data={product} id={product.id} nombre={product.name} descripcion={product.description} img={product.img} precio={product.price} stock={product.stock}/>
                            </div>
                        ))
                    }
                </div>
        }
        
        </>
        


        
    )
}

export default ItemListContainer