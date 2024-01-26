import ProductCard from "../product-card/productCard.component";
import './category-preview.styles.scss';
import { Link } from "react-router-dom";

const CategoryPreview = ({title, products})=> {
    return (
        <div className="category-preview-container">
            <Link to={`/shop/${title}`}>
            <h2 className="title"><span>{title.toUpperCase()}</span></h2>
            </Link>
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