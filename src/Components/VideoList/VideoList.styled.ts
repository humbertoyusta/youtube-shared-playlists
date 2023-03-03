import styled from "styled-components";

export const VideoListStyled = styled.div<{fullWidth: boolean}>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    position: relative;
    width: ${props => props.fullWidth ? '96vw' : '32vw'};
`;