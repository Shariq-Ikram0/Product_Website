import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from './Data';

const ProductInfo = () => {
    const { id } = useParams();
    const filterData = ProductData.filter((e, i) => {
        return e.id == id;
    });

    return (
        <div>

            <h1>Product Information</h1>
            {filterData.map((e, i) => {
                return (
                    <div key={i}>
                        <img src={e.image} style={{ width: '200px', height: 'auto' }}/>
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                    </div>
                );
            })}
            </div>
    );
};

export default ProductInfo
