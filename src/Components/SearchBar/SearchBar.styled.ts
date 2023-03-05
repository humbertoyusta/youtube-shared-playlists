import styled, {StyledComponent} from "styled-components";
import {motion} from "framer-motion";

export const SearchBarFormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px auto;
    width: 600px;
`;

export const SearchBarInputStyled = styled.input`
    border: 1px solid #e0e0e0;
    font-size: 16px;
    width: 500px;
    height: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-right: 0;
    padding: 5px 0 5px 25px;
    /* add a small shadow to the upper border */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchBarSubmitStyled = styled.button`
  border: 1px solid #e0e0e0;
  border-left: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  padding-right: 30px;
  margin-left: 0;
  padding-left: 0;
  background: #f6f6f6 url('/search-icon.svg') no-repeat 10px 50%;
  &:hover {
    background-color: #e6e6e6;
  }

  background-size: 30px 30px;
  height: 42px;
  width: 64px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchBarMotionAnimation: StyledComponent<any, any, {}> = styled(motion.div)
    .attrs(({delay}: {delay: number}) => ({
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
        transition: {
            type: "easeInOut",
            stiffness: 260,
            damping: 20,
            delay: delay,
            duration: 0.4,
        }
    }))``;