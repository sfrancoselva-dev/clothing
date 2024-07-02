import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

import { CategoriesPreviewWrapper } from "./CategoriesPreview.styles";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
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
