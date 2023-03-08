import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./ErrorAnimation.flottie.json";
import { ErrorAnimationStyled } from "./ErrorAnimation.styled";

export default function ErrorAnimation() {
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

    return <ErrorAnimationStyled ref={container} />;
}
