import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import CategoryList from "../../components/CategoryList/CategoryList.component";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionFetchingCategories } from "../../store/categories/categories.action";
import { selectFetchedStatus } from "../../store/categories/categories.selector";

const Shop = () => {
  const dispatch = useDispatch();
  const isCategoriesFetched = useSelector(selectFetchedStatus);

  useEffect(() => {
    !isCategoriesFetched && dispatch(actionFetchingCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryParam" element={<CategoryList />} />
    </Routes>
  );
};

export default Shop;
