import {useEffect, useRef} from "react";
import lottie from "lottie-web";
import animationData from "./SearchForSomethingAnimation.flottie.json";
import { SearchForSomethingAnimationStyled } from "./SearchForSomethingAnimation.styled";

export default function SearchForSomethingAnimation() {
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

    return <SearchForSomethingAnimationStyled ref={container} />;
}