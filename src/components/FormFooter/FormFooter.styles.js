import styled from "styled-components";

export const FormFooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  width: 70%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    align-items: center;
  }
`;
