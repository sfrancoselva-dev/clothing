import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 50px;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 9px;
  width: 350px;
  font-size: 1.2em;
  font-family: "Open Sans'";
  width: 70%;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  bottom: 5px;
  transition: all 0.3s cubic-bezier(0.87, -0.11, 0, 0.04);
  pointer-events: none;
  color: rgba(0, 0, 0, 0.7);

  &.shrink-label {
    bottom: 30px;
    font-size: 0.8em;
    color: rgba(0, 0, 0, 1);
  }
`;
