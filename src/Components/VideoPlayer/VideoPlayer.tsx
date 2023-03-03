
import {VideoPlayerIframeStyled, VideoPlayerTitleStyled, VideoPlayerWrapperStyled} from "./VideoPlayer.styled";
import useGetVideo from "../../Hooks/useGetVideo";
import Loading from "../Loading";
export default function VideoPlayer({ videoId }: { videoId: string }) {
    const { video, isLoading, error } = useGetVideo(videoId);

    if (isLoading)
        return (
            <VideoPlayerWrapperStyled>
                <Loading/>
            </VideoPlayerWrapperStyled>
        );

    if (error) {
        console.log(error);
        return <p>Error</p>;
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