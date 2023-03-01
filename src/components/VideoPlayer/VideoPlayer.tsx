import VideoInterface from "../../interfaces/VideoInterface";
import {VideoPlayerIframeStyled, VideoPlayerTitleStyled, VideoPlayerWrapperStyled} from "./VideoPlayer.styled";
export default function VideoPlayer({ video }: { video: VideoInterface }) {
    return (
        <VideoPlayerWrapperStyled>
            <VideoPlayerIframeStyled
                src={`https://www.youtube.com/embed/${video.id}`}
                allowFullScreen
            />
            <VideoPlayerTitleStyled>{video.title}</VideoPlayerTitleStyled>
        </VideoPlayerWrapperStyled>
    );
}