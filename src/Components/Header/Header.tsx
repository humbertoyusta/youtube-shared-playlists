import { HeaderStyled } from "./Header.styled";
import Logo, { EmptyDiv } from "../Logo";
import SearchBar from "../SearchBar";

export default function Header() {
    return (
        <HeaderStyled>
            <Logo src={"/logo.png"} alt={"Logo"} link={"/"} />
            <SearchBar />
            <EmptyDiv />
        </HeaderStyled>
    );
}
