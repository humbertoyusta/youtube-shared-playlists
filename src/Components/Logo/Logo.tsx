import {LogoStyled} from "./Logo.styled";
import {Link} from "react-router-dom";

type LogoProps = {
    src: string,
    alt: string,
    link: string,
}
export default function Logo({ src, alt, link }: LogoProps) {
    return (
        <Link to={link}>
            <LogoStyled src={src} alt={alt} />
        </Link>
    );
}