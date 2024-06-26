import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview.component";
import CategoryList from "../../components/CategoryList/CategoryList.component";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/categories/categories.context";
import { SHOP_DATA } from "../../shop-data";

const Shop = () => {
  const { setCategories } = useContext(CategoriesContext);

  useEffect(() => {
    setCategories(SHOP_DATA);
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryParam" element={<CategoryList />} />
    </Routes>
  );
};

export default Shop;
