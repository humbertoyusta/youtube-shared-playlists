import {useEffect, useRef} from "react";
import lottie from "lottie-web";
import {LoadingAnimationStyled} from "./LoadingAnimation.styled";
import animationData from "./LoadingAnimation.flottie.json";

export default function LoadingAnimation() {
    const container = useRef<any>(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        });

        return () => animation.destroy();
    }, []);

    return <LoadingAnimationStyled ref={container} />;
}