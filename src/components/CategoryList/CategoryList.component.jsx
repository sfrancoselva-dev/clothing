import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories/categories.context";
import { useParams } from "react-router-dom";

const CategoryList = () => {
  const { categories } = useContext(CategoriesContext);
  const { categoryParam } = useParams();

  const filteredCategories = categories.filter(
    (category) => category.title.toLowerCase() === categoryParam.toLowerCase()
  )[0];

  return (
    <>
      {filteredCategories && <CategoryPreview category={filteredCategories} />}
    </>
  );
};

export default CategoryList;
