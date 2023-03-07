import {
    VideoPlayerDescriptionStyled,
    VideoPlayerDivStyled,
    VideoPlayerIframeStyled,
    VideoPlayerTitleStyled,
    VideoPlayerViewsStyled,
    VideoPlayerWrapperStyled
} from "./VideoPlayer.styled";
import useGetVideo from "../../Hooks/useGetVideo";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import parseViews from "../../Utils/parseViews";
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
                <VideoPlayerDescriptionStyled>{video.description}</VideoPlayerDescriptionStyled>
                <VideoPlayerDivStyled>
                    <VideoPlayerViewsStyled>{parseViews(video.views)} Views</VideoPlayerViewsStyled>
                    <CopyLinkButton link={window.location.origin + location.pathname} />
                </VideoPlayerDivStyled>
            </VideoPlayerWrapperStyled>
        );
    else
        return <></>;
}