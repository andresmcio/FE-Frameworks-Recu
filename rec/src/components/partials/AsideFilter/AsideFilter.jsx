import './asideFilterMobile.css';
import './asideFilterTablet.css';
import './asideFilterDesktop.css';

const AsideFilter = () => {

    return (

        <aside className="product-filter">
            <div className="mobile-toggle">
                <span className="filter-expander">
                    <a id="showFilters" href="#showFilters">Filtrar</a>
                    <a id="hideFilters" href="#hideFilters">Esconder filtros</a>
                </span>
            </div>
            <ul className="collapsible mobile-toggled">
                <li>
                    <div className="category-wrapper">
                    <span className="category-header">Dispositivos / Herramientas</span>
                    <a className="expand" href=""><span className="material-icons">expand_more</span></a>
                    <a className="collapse active" href=""><span className="material-icons">expand_less</span></a>
                    </div>
                    <div>
                    <ul className="category-list expanded-list">
                        <li><a href="">Cámaras</a></li>
                        <li><a href="">Micrófonos</a></li>
                        <li><a href="">Capturadoras de video</a></li>
                        <li><a href="">Stream decks</a></li>
                        <li><a href="">Monitores</a></li>
                    </ul>
                    </div>
                </li>
                <li>
                    <div className="category-wrapper">
                    <span className="category-header">Salud del streamer</span>
                    <a className="expand active" href=""><span className="material-icons">expand_more</span></a>
                    <a className="collapse" href=""><span className="material-icons">expand_less</span></a>
                    </div>
                    <div>
                    <ul className="category-list collapsed-list">
                        <li><a href="">Lentes filtro UV</a></li>
                        <li><a href="">Corrector de postura</a></li>
                        <li><a href="">Más</a></li>
                    </ul>
                    </div>
                </li>
                <li>
                    <div className="category-wrapper">
                    <span className="category-header">Muebles</span>
                    <a className="expand active" href=""><span className="material-icons">expand_more</span></a>
                    <a className="collapse" href=""><span className="material-icons">expand_less</span></a>
                    </div>
                    <div>
                    <ul className="category-list collapsed-list">
                        <li><a href="">Mini bar/heladera</a></li>
                        <li><a href="">Silla gamer</a></li>
                        <li><a href="">Escritorios</a></li>
                        <li><a href="">Accesorios</a></li>
                        <li><a href="">Combos</a></li>
                    </ul>
                    </div>
                </li>
                <li>
                    <div className="category-wrapper">
                    <span className="category-header">Canjeables</span>
                    <a className="expand active" href=""><span className="material-icons">expand_more</span></a>
                    <a className="collapse" href=""><span className="material-icons">expand_less</span></a>
                    </div>
                    <div>
                    <ul className="category-list collapsed-list">
                        <li><a href="">Fitness</a></li>
                        <li><a href="">Ropa deportiva</a></li>
                        <li><a href="">Merchandasing</a></li>
                    </ul>
                    </div>
                </li>
            </ul>
        </aside>
    );

};

export default AsideFilter;