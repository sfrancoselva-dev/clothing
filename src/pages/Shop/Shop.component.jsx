import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import CategoryList from "../../components/CategoryList/CategoryList.component";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { actionFetchingCategories } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchingCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryParam" element={<CategoryList />} />
    </Routes>
  );
};

export default Shop;
