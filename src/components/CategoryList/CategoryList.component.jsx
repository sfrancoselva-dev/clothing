import CategoryPreview from "../CategoryPreview/CategoryPreview.component";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const CategoryList = () => {
  const categories = useSelector(selectCategories);
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
