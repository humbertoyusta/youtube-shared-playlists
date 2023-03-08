import styled from "styled-components";
import YouTube from "react-youtube";

export const VideoPlayerWrapperStyled = styled.div`
    width: 54vw;
    min-height: 80vh;
    margin-left: 6vw;
    margin-bottom: 6vh;
    position: relative;
    border: none;
`;

export const VideoPlayerTitleStyled = styled.h1`
  font-size: 1.5em;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const VideoPlayerIframeStyled = styled(YouTube)`
  width: 54vw;
  height: 72vh;
  margin: 0;
  border: none;
`;

export const VideoPlayerDescriptionStyled = styled.p`
    font-family: "Roboto", sans-serif;  
    margin-bottom: 10px;
`;

export const VideoPlayerDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 54vw;
  margin: 0;
`;

export const VideoPlayerViewsStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  color: #6b6b6b;
  margin: 0;
`;