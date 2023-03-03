import styled from "styled-components";
import {Link} from "react-router-dom";

export const VideoCardStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 360px; 
    height: 80px;
    text-decoration: none;
    color: #000;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
    padding-top: 0;
    /*border: 1px solid #000;*/
    /*border-radius: 0.5rem;*/
    /*background-color: #fff;*/
    /*box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);*/
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
    justify-content: space-between;
    align-items: flex-start;
    width: 60%;
    height: 100%;
    padding: 0.5rem;
`;