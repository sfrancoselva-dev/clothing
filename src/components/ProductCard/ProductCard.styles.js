import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 23%;
  height: 350px;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media ((min-width: 501px) and (max-width: 920px)) {
    width: 47%;
  }

  @media ((min-width: 921px) and (max-width: 1050px)) {
    width: 30%;
  }

  & Button {
    position: absolute;
    bottom: 60px;
    margin: 0px auto;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out;
    width: 80%;
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
