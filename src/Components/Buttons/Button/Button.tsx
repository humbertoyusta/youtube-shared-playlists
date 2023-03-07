import {ButtonMotionAnimation, ButtonStyled, ButtonTextStyled,} from "./Button.styled";
import React from "react";

type ButtonProps = {
    text: string;
    animated?: boolean;
    delay?: number;
}

export default function Button({text, animated = false, delay = 0, ...rest}:
                                   ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return animated ? (
        <ButtonMotionAnimation delay={delay}>
            <ButtonStyled {...rest}>
                <ButtonTextStyled>{text}</ButtonTextStyled>
            </ButtonStyled>
        </ButtonMotionAnimation>
    ) : (
        <ButtonStyled {...rest}>
            <ButtonTextStyled>{text}</ButtonTextStyled>
        </ButtonStyled>
    );
}