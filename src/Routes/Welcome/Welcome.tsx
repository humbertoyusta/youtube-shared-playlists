import SearchBar from "../../Components/SearchBar";
import {WelcomeWrapperStyled} from "./Welcome.styled";
import Logo from "../../Components/Logo";
import {motion, AnimatePresence} from "framer-motion";

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

export default function Welcome() {
    return (
        <WelcomeWrapperStyled>
            <AnimatePresence>
                <motion.div
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Logo src={"/logo.png"} alt={"Logo"} link={"/"} big />
                </motion.div>
                <SearchBar delay={1.2} />
            </AnimatePresence>
        </WelcomeWrapperStyled>
    )
}