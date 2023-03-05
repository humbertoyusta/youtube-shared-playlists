import {VideoItemEnterAnimation, VideoListStyled} from "./VideoList.styled";
import useGetVideoList from "../../Hooks/useGetVideoList";
import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import SearchForSomethingAnimation from "../Animations/SearchForSomethingAnimation";
import { AnimatePresence } from 'framer-motion';

export default function VideoList ({columns}: {columns: number}) {
    // get search string from url params
    const [searchString, setSearchString] = useState<string>("");

    const location = useLocation();

    // update search string when url params change
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSearchString(searchParams.get("query") || "");
    }, [location.search]);

    // get video list
    const {videoList, error, isLoading} = useGetVideoList(searchString);

    // scroll to top when video list changes
    useEffect(() => {
        videoList.length && window.scrollTo(0, 0);
    }, [videoList]);

    // show search for something animation if search string is empty
    if (!searchString)
        return (
            <VideoListStyled columns={columns}>
                <SearchForSomethingAnimation />
            </VideoListStyled>
        );

    // show loading animation if loading
    if (isLoading)
        return (
            <VideoListStyled columns={columns}>
                <LoadingAnimation/>
            </VideoListStyled>
        );

    // show error animation if error
    if (error) {
        console.log(error);
        return (
            <VideoListStyled columns={columns}>
                <ErrorAnimation />
            </VideoListStyled>
        );
    }

    // show video list
    return (
        <VideoListStyled columns={columns}>
            <AnimatePresence>
                {videoList.map((video: VideoInterface, index: number) => (
                    <VideoItemEnterAnimation key={video.id} index={index}>
                        <VideoItem video={video} key={video.id} searchString={searchString} />
                    </VideoItemEnterAnimation>
                ))}
            </AnimatePresence>
        </VideoListStyled>
    );
}