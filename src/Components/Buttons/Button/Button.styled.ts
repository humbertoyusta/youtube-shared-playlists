import styled, { StyledComponent } from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyled = styled.button`
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

export const ButtonTextStyled = styled.span`
    margin-left: 6px;
`;

export const ButtonMotionAnimation: StyledComponent<any, any, {}> = styled(
    motion.div
).attrs(({ delay }: { delay: number }) => ({
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: {
        type: "easeInOut",
        stiffness: 260,
        damping: 20,
        delay: delay,
        duration: 0.3,
    },
}))``;
