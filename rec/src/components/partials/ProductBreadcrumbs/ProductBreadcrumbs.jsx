
const ProductBreadcrumbs = () => {

    return(

        <nav>
            <div class="nav-wrapper">
            <div class="breadcrumbs">
                <a href="/products" class="breadcrumb">productos</a>
                <a href="/products/ functions.simplify(category.catName) " class="breadcrumb"> category.catName </a>
                <a href="/products/ functions.simplify(category.catName) + '/' + functions.simplify(subcategory.subName) " class="breadcrumb last-breadcrumb"> subcategory.subName  </a>
            </div>
            </div>
        </nav>
    );
};