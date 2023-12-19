import './productDetailMobile.css';
import './productDetailTablet.css';
import './productDetailDesktop.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AsideFilter from '../../../partials/AsideFilter/AsideFilter';


const ProductDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:2023/products', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const productList = await response.json();
                setData(productList);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const productToRender = data.find((product) => product.id === id);

    if (!productToRender) {
        return <div>Product not found</div>;
    }

    return (
        <main className='not-main-Home'>
            <AsideFilter />
            <section className='product-detail'>
                <article className="product-wrapper">
                    <div className="product-main-wrapper">
                        <figure className="product-images">
                            <div className="product-thumbnails">
                                <img src={`${productToRender.largeFrontImage}`} alt="feature" />
                                <img src={`${productToRender.mediumImage}`} alt="feature" />
                                <img src={`${productToRender.thumbnailImage}`} alt="feature" />
                                <img src={`${productToRender.largeImage}`} alt="feature" />
                            </div>
                            <img className="img-main" src={`${productToRender.image}`} alt="" />
                        </figure>
                        <div className="product-info">
                            <h3>{productToRender.name}</h3>
                            <span className="product-rating">
                                {productToRender.customerReviewAverage} <i className='material-icons'>star</i>
                            </span>
                            <span className="pricing"><i className="material-icons">attach_money</i> {productToRender.salePrice} </span>
                            <a className="btn-add2Cart"><i className="material-icons">add_shopping_cart</i>Comprar</a>
                        </div>
                    </div>
                    <div className="product-description-wrapper">
                        <div className="description-header">Descripción de producto</div>
                        <div className="tab-wrapper">
                            <ul className="tabs">
                                <li><a href="#about" className="tab active">Información</a></li>
                                <li><a href="#specs" className="tab">Especificaciones</a></li>
                                <li><a href="#more" className="tab">Más</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="about" className="tab-pane active">
                                {productToRender.features && Array.isArray(productToRender.features) && productToRender.features.map((feature, index) => (
                                    <span key={index} className='product-feature'>{feature.feature}</span>
                                ))}
                            </div>
                            <div id="specs" className="tab-pane">

                            </div>
                            <div id="more" className="tab-pane">

                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default ProductDetail;
