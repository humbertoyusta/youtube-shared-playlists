import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoStyled = styled.img<{ big: boolean | undefined }>`
    width: ${(props) => (props.big ? "320px" : "130px")};
    height: ${(props) => (props.big ? "130px" : "50px")};
    margin: 0 20px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        scale: 1.05;
    }
`;

export const EmptyDiv = styled.div`
    margin: 0 20px;
    width: 130px;
    height: 50px;
`;

const logoVariants = {
    hidden: {
        opacity: 0,
        rotate: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        rotate: 360,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: "easeInOut",
        },
    },
};

export const LogoMotion = styled(motion.div).attrs({
    variants: logoVariants,
    initial: "hidden",
    animate: "visible",
})``;
