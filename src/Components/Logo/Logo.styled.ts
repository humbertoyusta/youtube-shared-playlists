import styled from "styled-components";

export const LogoStyled = styled.img<{big: boolean | undefined}>`
    width: ${props => props.big ? "320px" : "130px"};
    height: ${props => props.big ? "130px" : "50px"};
    margin: 0 20px;
    cursor: pointer;
    border: none;
    &:hover {
        transform: scale(1.1);
    }
`;

export const EmptyDiv = styled.div`
    margin: 0 20px;
    width: 130px;
    height: 50px;
`;