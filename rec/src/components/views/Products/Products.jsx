import './productsMobile.css';
import './productsTablet.css';
import './productsDesktop.css';
import React, { useEffect, useState } from 'react';
import AsideFilter from '../../partials/AsideFilter/AsideFilter';

const Products = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {

            const response = await fetch('http://localhost:2023/products', {headers: {
                'Content-Type': 'application/json',
            }});

            if (!response.ok){
                throw Error(response.statusText);
            }

            const result = await response.json();
            
            
            // const response2 = await fetch('https://api.bestbuy.com/v1/products(categoryPath.id=pcmcat152100050038)?apiKey=3uUU3Hg6RrcV2AqwgG5ATPgU&format=json&show=sku,name,salePrice,image,largeFrontImage,mediumImage,thumbnailImage,largeImage,customerReviewAverage,features.feature', {
            //     method: 'GET',
            //     mode: 'cors',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       // Otras cabeceras que puedas necesitar
            //     },
            //     credentials: 'include', // Usa 'include' si estás enviando cookies con la solicitud
            //   });
            // const result2 = await response2.json();

            // const response3 = await fetch('https://api.bestbuy.com/v1/products(categoryPath.id=pcmcat306400050031)?apiKey=3uUU3Hg6RrcV2AqwgG5ATPgU&format=json&show=sku,name,salePrice,image,largeFrontImage,mediumImage,thumbnailImage,largeImage,customerReviewAverage,features.feature', {
            //     method: 'GET',
            //     mode: 'cors',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       // Otras cabeceras que puedas necesitar
            //     },
            //     credentials: 'include', // Usa 'include' si estás enviando cookies con la solicitud
            //   });
            // const result3 = await response3.json();


            // const response4 = await fetch('https://api.bestbuy.com/v1/products(categoryPath.id=pcmcat304600050011)?apiKey=3uUU3Hg6RrcV2AqwgG5ATPgU&format=json&show=sku,name,salePrice,image,largeFrontImage,mediumImage,thumbnailImage,largeImage,customerReviewAverage,features.feature', {
            //     method: 'GET',
            //     mode: 'cors',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       // Otras cabeceras que puedas necesitar
            //     },
            //     credentials: 'include', // Usa 'include' si estás enviando cookies con la solicitud
            //   });
            // const result4 = await response4.json();

            // Combina los resultados en un solo array
            

            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }

    return (
        <main className="not-main-Home">
            <AsideFilter />
            <section className="products-wrapper">
                {data.map((product) => (
                    <div className="product-container" key={product.sku}>
                        <div className="toggler">
                            <i className="material-icons">more_vert</i>
                        </div>
                        <article className="product-main-display">
                            <div className="title-row">
                                <a href={`/products/${product.sku}`} className="product-name-link">
                                    <h4 className="product-name">{product.name}</h4>
                                </a>
                            </div>
                            <div className="content-row">
                                <a href={`/products/${product.sku}`} className="product-image-link">
                                    <figure className="image-column">
                                        <img className="img-main" src={product.image} alt="" />
                                    </figure>
                                </a>
                                <div className="shopping-column">
                                    <span className="pricing">
                                        <i className="material-icons">attach_money</i> {product.salePrice}
                                    </span>
                                    <span className="product-rating">
                                    {product.customerReviewAverage} <i className='material-icons'>star</i>
                                    </span>
                                    <a className="btn-add2Cart"><i className="material-icons">add_shopping_cart</i>Comprar</a>
                                </div>
                            </div>
                        </article>
                        <article className="product-more-info">
                            <a href={`/products/${product.sku}`} className="product-image-link">
                                <figure className="image-column">
                                    <img className="img-main" src={product.image} alt="" />
                                </figure>
                            </a>
                            <div className="info-content-row">
                                <a href={`/products/${product.sku}`} className="product-name-link">
                                    <h4 className="product-name">{product.name}</h4>
                                </a>
                                {/* Accede a las propiedades de cada feature */}
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature.feature}</li>
                                    ))}
                                </ul>
                                <div className="bottom-row">
                                    <a href={`/products/${product.sku}`}>
                                        <i className="material-icons">info</i> Ver más
                                    </a>
                                    <a className="btn-add2Cart" href="/cart"><i className="material-icons">add_shopping_cart</i>Comprar</a>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </section>
        </main>
    );
    

};

export default Products;