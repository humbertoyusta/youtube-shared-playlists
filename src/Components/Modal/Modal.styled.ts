import styled from "styled-components";

export const ModalOverlayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalStyled = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
    min-height: 120px;
    min-width: 120px;
`;
