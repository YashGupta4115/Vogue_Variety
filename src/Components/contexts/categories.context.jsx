import { createContext, useState, useEffect } from 'react';

import {getCategoriesAndDocuments } from '../../routes/utils/firebase/firebase.utils';

// import SHOP_DATA from '../../shop-data/shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});


export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   if (Array.isArray(SHOP_DATA)) {
  //     addCollectionAndDocuments('collections', SHOP_DATA);
  //   } else {
  //     console.error('SHOP_DATA is not an array'); // Handle the error as needed
  //   }
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};