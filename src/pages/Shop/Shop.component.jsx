import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import CategoryList from "../../components/CategoryList/CategoryList.component";
import { useEffect } from "react";
import { SHOP_DATA } from "../../shop-data";

import { useDispatch } from "react-redux";
import { actionFetchCategories } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchCategories(SHOP_DATA));
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryParam" element={<CategoryList />} />
    </Routes>
  );
};

export default Shop;
