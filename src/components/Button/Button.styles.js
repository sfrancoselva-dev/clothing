import styled from "styled-components";

export const CustomButton = styled.button`
  width: 250px;
  height: 50px;
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &.inverted-btn {
    background: rgba(255, 255, 255, 0.7);
    color: #000;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
    }
  }
`;
