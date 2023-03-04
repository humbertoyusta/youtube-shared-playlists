import {VideoListStyled} from "./VideoList.styled";
import useGetVideoList from "../../Hooks/useGetVideoList";
import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import LoadingAnimation from "../LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";

export default function VideoList ({fullWidth}: {fullWidth: boolean}) {
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
        return (
            <VideoListStyled fullWidth={fullWidth}>
                <LoadingAnimation/>
            </VideoListStyled>
        );

    if (error) {
        console.log(error);
        return (
            <VideoListStyled fullWidth={fullWidth}>
                <ErrorAnimation />
            </VideoListStyled>
        );
    }

    return (
        <VideoListStyled fullWidth={fullWidth}>
            {videoList.map((video: VideoInterface) => (
                <VideoItem video={video} key={video.id} searchString={searchString} />
            ))}
        </VideoListStyled>
    );
}