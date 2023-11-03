import { Routes,Route } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';

const Shop = () => {
    return(
        <div className="product-container">
            <Routes>
                <Route index element={<CategoriesPreview/>}></Route>
                <Route path=':category' element={<Category/>}></Route>
            </Routes>
        </div>
        
    )
}

export default Shop;