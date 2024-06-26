import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 23%;
  height: 350px;
  position: relative;

  & Button {
    position: absolute;
    bottom: 60px;
    margin: 0px auto;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out;
  }

  &:hover {
    & Button {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const ProductImage = styled.div`
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ProductDetailFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
