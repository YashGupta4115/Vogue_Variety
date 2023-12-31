import ProductCard from "../product-card/productCard.component";
import './category-preview.styles.scss';

const CategoryPreview = ({title, products})=> {
    return (
        <div className="category-preview-container">
            <h2 className="title"><span>{title.toUpperCase()}</span></h2>
            <div className="preview">
                {
                    products.filter((_,idx)=> idx< 4).map((product)=>(
                        <ProductCard key = {product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;