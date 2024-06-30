import { Link } from "react-router-dom";

import styled from "styled-components";

export const Collections = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Collection = styled(Link)`
  height: 250px;
  border: 1px solid #000;
  position: relative;
  flex: 1 0 30%;
  margin: 8px;
  cursor: pointer;
  overflow: hidden;

  &:nth-child(4),
  &:nth-child(5) {
    height: 400px;

    @media (max-width: 992px) {
      height: 250px;
    }
  }

  &:hover > :first-child {
    transform: scale(1.2);
  }
`;

export const CollectionImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.8s ease-in-out;
`;

export const CollectionDetail = styled.div`
  width: 150px;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(255, 255, 255, 0.7);

  p {
    font-size: 14px;
  }
`;
