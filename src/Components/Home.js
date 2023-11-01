import React, { useEffect } from 'react';
import '../styles/Home.css';
import Product from './Product';
import axios from 'axios';
import { useStateValue } from '../Store/StateProvider';
import Spinner from './Spinner';

function Home() {

    const [{ products }, dispatch] = useStateValue();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch({
                    type: 'SET_DATA',
                    data: response.data,
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch]);

    return (
        <div className='home'>
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            {/* Producrts with id title price rating image */}
            {!products && <Spinner />}
            {products && <div className="home_row">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        rating={Math.round(product.rating.rate)}
                    />
                )
                )}
            </div>}

        </div>
    )
}

export default Home
