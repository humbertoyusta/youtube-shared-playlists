import {LogoMotion, LogoStyled} from "./Logo.styled";
import {Link} from "react-router-dom";

type LogoProps = {
    src: string,
    alt: string,
    link: string,
    big?: boolean,
    animated?: boolean,
}
export default function Logo({ src, alt, link, big, animated = false }: LogoProps) {
    return (
        <Link to={link}>
            {animated ?
                <LogoMotion>
                    <LogoStyled src={src} alt={alt} big={big} />
                </LogoMotion>
                :
                <LogoStyled src={src} alt={alt} big={big} />
            }
        </Link>
    );
}