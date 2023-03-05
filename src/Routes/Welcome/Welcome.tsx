import SearchBar from "../../Components/SearchBar";
import {WelcomeWrapperStyled} from "./Welcome.styled";
import Logo from "../../Components/Logo";

export default function Welcome() {
    return (
        <WelcomeWrapperStyled>
            <Logo src={"/logo.png"} alt={"Logo"} link={"/"} big animated />
            <SearchBar delay={1.2} />
        </WelcomeWrapperStyled>
    )
}