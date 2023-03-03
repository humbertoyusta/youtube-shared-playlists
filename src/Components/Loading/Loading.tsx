import {LoadingAnimationStyled, LoadingWrapperStyled} from "./Loading.styled";

export default function Loading() {
    return (
        <LoadingWrapperStyled>
            <LoadingAnimationStyled src={"/loading.gif"} />
        </LoadingWrapperStyled>
    );
}