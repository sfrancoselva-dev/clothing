import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 50px;
  }
`;
