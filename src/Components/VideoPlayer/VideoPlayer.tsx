import {VideoPlayerIframeStyled, VideoPlayerTitleStyled, VideoPlayerWrapperStyled} from "./VideoPlayer.styled";
import useGetVideo from "../../Hooks/useGetVideo";
import LoadingAnimation from "../LoadingAnimation";
import ErrorAnimation from "../ErrorAnimation";

export default function VideoPlayer({ videoId }: { videoId: string }) {
    const { video, isLoading, error } = useGetVideo(videoId);

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
            </VideoPlayerWrapperStyled>
        );
    else
        return (<></>);
}