import styled from "styled-components";

export const CopyLinkButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #ff5959 0%, #ff284f 100%);
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
  }
`;

export const CopyLinkTextStyled = styled.span`
  margin-left: 6px;
`;

