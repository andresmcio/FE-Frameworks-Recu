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

            const response = await fetch(`http://localhost:2023/products/${id}`, {headers: {
                'Content-Type': 'application/json',
            }});

            if (!response.ok){
                throw Error(response.statusText);
            }

            const result = await response.json();
            
            setData(result);
            setLoading(false);
            setError(null);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
        };
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className='not-main-Home'>
            <AsideFilter/>
            <section className='product-detail'>
                <article className="product-wrapper">
                    <div className="product-main-wrapper">
                        <figure className="product-images">
                            <div className="product-thumbnails">
                                
                                <img src={`${data.largeFrontImage}`} alt="feature"/> 
                                <img src={`${data.mediumImage}`} alt="feature"/>
                                <img src={`${data.thumbnailImage}`} alt="feature"/>
                                <img src={`${data.largeImage}`} alt="feature"/>

                            </div>
                            <img className="img-main" src={`${data.image}`} alt=""/>
                        </figure>
                        <div className="product-info">
                            <h3> {data.name} </h3>
                            <span className="product-rating">
                                {data.customerReviewAverage} <i className='material-icons'>star</i>
                            </span>
                            <span className="pricing"><i className="material-icons">attach_money</i> {data.salePrice} </span>
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
                                {data.features && Array.isArray(data.features) && data.features.map((feature, index) => (
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