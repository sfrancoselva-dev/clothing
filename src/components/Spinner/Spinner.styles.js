import styled, { keyframes } from "styled-components";

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const SpinnerOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
`;

const spin = keyframes`
 0% {
    transform: rotate(0deg);
 }
 100% {
    transform: rotate(360deg);
 }
`;

export const SpinnerIcon = styled.div`
  border: 8px solid rgb(255 255 255 / 10%);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
  display: block;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
