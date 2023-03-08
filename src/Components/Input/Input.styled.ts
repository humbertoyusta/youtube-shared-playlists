import styled from "styled-components";

export const InputStyled = styled.input<{ hasError: boolean }>`
    border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;

    ::placeholder {
        color: #ccc;
    }
`;

export const LabelStyled = styled.label`
    display: block;
    font-family: "Roboto", sans-serif;
    margin-bottom: 5px;
`;

export const ErrorTextStyled = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;
