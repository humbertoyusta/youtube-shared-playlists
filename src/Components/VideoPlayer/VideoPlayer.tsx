import {
    VideoPlayerDivStyled,
    VideoPlayerIframeStyled,
    VideoPlayerTitleStyled,
    VideoPlayerWrapperStyled
} from "./VideoPlayer.styled";
import useGetVideo from "../../Hooks/useGetVideo";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import CopyLinkButton from "../Buttons/CopyLinkButton";
import {useLocation} from "react-router-dom";

export default function VideoPlayer({ videoId }: { videoId: string }) {
    const { video, isLoading, error } = useGetVideo(videoId);
    const location = useLocation();

    if (isLoading)
        return (
            <VideoPlayerWrapperStyled>
                <LoadingAnimation/>
            </VideoPlayerWrapperStyled>
        );

    if (error) {
        console.log(error);
        return (
            <VideoPlayerWrapperStyled>
                <ErrorAnimation/>
            </VideoPlayerWrapperStyled>
        );
    }

    if (video)
        return (
            <VideoPlayerWrapperStyled>
                <VideoPlayerIframeStyled
                    src={`https://www.youtube.com/embed/${video.id}`}
                    allowFullScreen
                />
                <VideoPlayerTitleStyled>{video.title}</VideoPlayerTitleStyled>
                <VideoPlayerDivStyled>
                    <CopyLinkButton link={window.location.origin + location.pathname} />
                </VideoPlayerDivStyled>
            </VideoPlayerWrapperStyled>
        );
    else
        return <></>;
}