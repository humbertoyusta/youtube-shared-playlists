import styled from "styled-components";

export const PlaylistWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const PlaylistStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  min-height: 60vh;
  position: relative;
  width: 30vw;
  border: #e5e5e5 2px solid;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
`;

export const PlaylistButtonListStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PlaylistTitleStyled = styled.h1`
  font-size: 1.2em;
  font-family: "Roboto", sans-serif;
  margin-bottom: 2px;
  margin-top: 2px;
  text-align: center;
`;
