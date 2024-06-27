import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories/categories.context";

import { CategoriesPreviewWrapper } from "./CategoriesPreview.styles";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <CategoriesPreviewWrapper>
      {categories.map((category, index) => {
        return (
          <CategoryPreview key={index} category={category} itemsToShow={4} />
        );
      })}
    </CategoriesPreviewWrapper>
  );
};

export default CategoriesPreview;
