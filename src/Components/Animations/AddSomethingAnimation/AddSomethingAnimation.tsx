import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./AddSomethingAnimation.lottie.json";
import { AddSomethingAnimationStyled } from "./AddSomethingAnimation.styled";

export default function AddSomethingAnimation() {
    const container = useRef<any>(null);
    const animation = useRef<any>(null);

    useEffect(() => {
        if (container.current && !animation.current) {
            animation.current = lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: false,
                autoplay: true,
                animationData: animationData,
            });

            animation.current.addEventListener("complete", () => {
                animation.current.isPaused = true;
            });
        }
    }, [container, animation]);

    return <AddSomethingAnimationStyled ref={container} />;
}
