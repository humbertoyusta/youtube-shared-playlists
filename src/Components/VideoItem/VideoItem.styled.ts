import styled from "styled-components";
import {Link} from "react-router-dom";

export const VideoCardStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    width: 360px; 
    height: 80px;
    text-decoration: none;
    color: #000;
    margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const VideoCardNoLinkStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  width: 360px;
  height: 80px;
  text-decoration: none;
  color: #000;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const VideoThumbnailStyled = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 0.75rem;
`;

export const VideoInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
    flex-wrap: nowrap;
    align-items: start;
    width: 60%;
    height: 100%;
    margin-left: 1rem;
`;

export const VideoViewsStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  font-weight: 200;
  color: #6b6b6b;
  margin: 0;
`;

export const VideoTitleStyled = styled.h2`
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
  height: 40px;
  word-break: break-word;
  margin: 0;
`;