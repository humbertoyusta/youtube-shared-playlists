import {ButtonWithIconMotionAnimation, ButtonWithIconStyled, ButtonWithIconTextStyled,} from "./ButtonWithIcon.styled";
import React from "react";
import {ReactComponent as ShuffleIcon} from "./Icons/shuffle.svg";
import {ReactComponent as PlayIcon} from "./Icons/play.svg";

type ButtonWithIconProps = {
    text: string;
    animated?: boolean;
    delay?: number;
}

export default function ButtonWithIcon({text, animated = false, delay = 0, ...rest}:
                                           ButtonWithIconProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const buttonWithIcon = (
        <ButtonWithIconStyled {...rest}>
            {text === "Shuffle" && <ShuffleIcon/>}
            {text === "Play" && <PlayIcon/>}
            <ButtonWithIconTextStyled>{text}</ButtonWithIconTextStyled>
        </ButtonWithIconStyled>
    );

    return animated ? (
        <ButtonWithIconMotionAnimation delay={delay}>
            {buttonWithIcon}
        </ButtonWithIconMotionAnimation>
    ) : buttonWithIcon;
}