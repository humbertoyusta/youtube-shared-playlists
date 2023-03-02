import {VideoListStyled} from "./VideoList.styled";
import useGetVideoList from "../../Hooks/useGetVideoList";
import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export default function VideoList () {
    // get search string from url params
    const [searchString, setSearchString] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSearchString(searchParams.get("query") || "");
    }, [location.search]);

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
                <VideoItem video={video} key={video.id} searchString={searchString} />
            ))}
        </VideoListStyled>
    );
}