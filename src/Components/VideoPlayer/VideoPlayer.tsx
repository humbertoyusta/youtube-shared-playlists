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

type VideoPlayerProps = {
    videoId: string;
    playNextVideo?: () => void;
}

export default function VideoPlayer({videoId, playNextVideo}: VideoPlayerProps) {
    const {video, isLoading, error} = useGetVideo(videoId);
    const location = useLocation();

    if (isLoading)
        return (
            <VideoPlayerWrapperStyled>
                <LoadingAnimation/>
            </VideoPlayerWrapperStyled>
        );

    if (error) {
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
                    url={`https://www.youtube.com/embed/${video.id}`}
                    playing={true}
                    controls={true}
                    onEnded={playNextVideo ? () => playNextVideo() : () => {
                    }}
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