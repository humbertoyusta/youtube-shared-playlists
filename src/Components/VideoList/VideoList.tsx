import {VideoListStyled} from "./VideoList.styled";
import useGetVideoList from "../../Hooks/useGetVideoList";
import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";

export default function VideoList () {
    // get search string from url
    const searchString = new URLSearchParams(window.location.search).get("query") || "";

    // get video list
    const {videoList, error, isLoading} = useGetVideoList(searchString);

    if (!searchString)
        return (<p>Search for something</p>);

    if (isLoading)
        return <p>Loading...</p>;

    if (error) {
        console.log(error);
        return <p>Error</p>;
    }

    return (
        <VideoListStyled>
            {videoList.map((video: VideoInterface) => (
                <VideoItem video={video} key={video.id} />
            ))}
        </VideoListStyled>
    );
}