import SearchBar from "../../Components/SearchBar";
import {WelcomeWrapperStyled} from "./Welcome.styled";
import Logo from "../../Components/Logo";
import {AnimatePresence} from "framer-motion";

export default function Welcome() {
    return (
        <WelcomeWrapperStyled>
            <AnimatePresence>
                <Logo src={"/logo.png"} alt={"Logo"} link={"/"} big animated />
                <SearchBar delay={1.2} />
            </AnimatePresence>
        </WelcomeWrapperStyled>
    )
}