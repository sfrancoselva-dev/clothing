import styled from "styled-components";

export const CategoryPreviewWrapper = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e1e1e1;

  &:last-child {
    border-bottom: none;
  }
`;

export const CategoryItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const CategoryLinkTitle = styled.h2`
  cursor: pointer;
`;
