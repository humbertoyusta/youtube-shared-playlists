import styled, { StyledComponent } from "styled-components";
import { motion } from "framer-motion";

export const VideoListStyled = styled.div<{ columns: number }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    position: relative;
    width: ${(props) => props.columns * 32}vw;
`;

export const VideoItemEnterAnimation: StyledComponent<any, any, {}> = styled(
    motion.div
).attrs(({ index }: { index: number }) => ({
    initial: { x: 40, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: index * 0.1, duration: 0.3 },
}))``;
