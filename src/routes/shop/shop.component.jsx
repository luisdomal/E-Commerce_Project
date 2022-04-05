import { Routes, Route } from 'react-router-dom';

import DirectoryItem from '../../components/directory-item/directory-item.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route index element={<DirectoryItem />} />
    </Routes>
  );
};

export default Shop;
