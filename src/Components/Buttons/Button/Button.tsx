import React from "react";
import { ReactComponent as ShuffleIcon } from "./Icons/shuffle.svg";
import { ReactComponent as PlayIcon } from "./Icons/play.svg";
import { ReactComponent as RemoveIcon } from "./Icons/remove.svg";
import { ReactComponent as AddIcon } from "./Icons/add.svg";
import {
    ButtonMotionAnimation,
    ButtonStyled,
    ButtonTextStyled,
} from "./Button.styled";

type ButtonProps = {
    text: string;
    name?: string;
    animated?: boolean;
    delay?: number;
};

export default function Button({
    name,
    text,
    animated = false,
    delay = 0,
    ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const button = (
        <ButtonStyled {...rest}>
            {name === "shuffle" && <ShuffleIcon />}
            {name === "play" && <PlayIcon />}
            {name === "remove" && <RemoveIcon />}
            {name === "add" && <AddIcon />}
            {text && <ButtonTextStyled>{text}</ButtonTextStyled>}
        </ButtonStyled>
    );

    return animated ? (
        <ButtonMotionAnimation delay={delay}>{button}</ButtonMotionAnimation>
    ) : (
        button
    );
}
