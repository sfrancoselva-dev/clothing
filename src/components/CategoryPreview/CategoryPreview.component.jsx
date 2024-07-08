import { useNavigate } from "react-router-dom";
import {
  CategoryItemsWrapper,
  CategoryLinkTitle,
  CategoryPreviewWrapper,
} from "./CategoryPreview.styles";
import ProductCard from "../ProductCard/ProductCard.component";

const CategoryPreview = ({
  category: { title, items },
  itemsToShow = items.length,
}) => {
  const navigate = useNavigate();

  const navigateToCategory = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <CategoryPreviewWrapper key={title}>
      <CategoryLinkTitle onClick={navigateToCategory}>
        {title.toUpperCase()}
      </CategoryLinkTitle>
      <CategoryItemsWrapper>
        {items.map((item, index) => {
          return (
            index < itemsToShow && (
              <ProductCard item={item} key={item.id} belongsTo={title} />
            )
          );
        })}
      </CategoryItemsWrapper>
    </CategoryPreviewWrapper>
  );
};

export default CategoryPreview;
