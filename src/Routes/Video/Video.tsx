import VideoPlayer from "../../Components/VideoPlayer";
import {useParams} from "react-router-dom";
import useGetVideo from "../../Hooks/useGetVideo";
import VideoList from "../../Components/VideoList";
import {VideoWrapperStyled} from "./Video.styled";

export default function Video() {
    // get video id from url params
    const {videoId} = useParams<{videoId: string}>();

    const {video, isLoading, error} = useGetVideo(videoId ? videoId : "");

    if (isLoading)
        return <p>Loading...</p>;

    if (error) {
        console.log(error);
        return <p>Error</p>;
    }

    return (
        <VideoWrapperStyled>
            {video &&
                <VideoPlayer video={video} />
            }
            <VideoList fullWidth={false} />
        </VideoWrapperStyled>
    );
}