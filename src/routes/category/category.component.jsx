import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Components/contexts/categories.context";
import ProductCard from "../../Components/product-card/productCard.component";
import './category.styles.scss';

const Category= () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext); 
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return(
        <div>
            <h2>{category.toUpperCase()}</h2>
            <div className="category-container-2">
                {
                    products && products.map((product)=>{
                        return (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        )
                    })
                }
            </div>
        </div>
        
    )
}


export default Category;