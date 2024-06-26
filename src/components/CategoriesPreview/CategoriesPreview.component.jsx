import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories/categories.context";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="categories-wrapper">
      {categories.map((category, index) => {
        return (
          <CategoryPreview key={index} category={category} itemsToShow={4} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
