import {ButtonMotionAnimation, ButtonStyled, ButtonTextStyled,} from "./Button.styled";

type CreatePlaylistButtonProps = {
    text: string;
    onClick: () => void;
    animated?: boolean,
    delay?: number;
}

export default function Button({text, onClick, animated = false, delay = 0}: CreatePlaylistButtonProps) {
    return animated ? (
        <ButtonMotionAnimation delay={delay}>
            <ButtonStyled onClick={onClick}>
                <ButtonTextStyled>{text}</ButtonTextStyled>
            </ButtonStyled>
        </ButtonMotionAnimation>
    ) : (
        <ButtonStyled onClick={onClick}>
            <ButtonTextStyled>{text}</ButtonTextStyled>
        </ButtonStyled>
    );
}