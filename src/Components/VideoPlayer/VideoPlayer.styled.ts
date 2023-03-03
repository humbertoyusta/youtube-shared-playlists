import styled from "styled-components";

export const VideoPlayerWrapperStyled = styled.div`
    width: 54vw;
    height: 80vh;
    display: flex;
    margin-left: 6vw;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    /*align-items: flex-start;*/
    position: relative;
    border: none;
`;

export const VideoPlayerTitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const VideoPlayerIframeStyled = styled.iframe`
  width: 54vw;
  height: 64vh;
  margin: 0;
  border: none;
`;