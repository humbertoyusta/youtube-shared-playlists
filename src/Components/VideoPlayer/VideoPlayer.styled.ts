import styled from "styled-components";

export const VideoPlayerWrapperStyled = styled.div`
    width: 64vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    margin: 2rem auto;
    border: none;
`;

export const VideoPlayerTitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const VideoPlayerIframeStyled = styled.iframe`
  width: 60vw;
  height: 70vh;
  margin: 0;
  border: none;
`;