import {VideoListStyled} from "./VideoList.styled";
import useGetVideoList from "../../hooks/useGetVideoList";
import VideoInterface from "../../interfaces/VideoInterface";
import VideoItem from "../VideoItem";

export default function VideoList ({searchString}: {searchString: string}) {
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