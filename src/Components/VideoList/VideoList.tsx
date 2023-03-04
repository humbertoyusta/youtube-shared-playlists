import {VideoListStyled} from "./VideoList.styled";
import useGetVideoList from "../../Hooks/useGetVideoList";
import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import SearchForSomethingAnimation from "../Animations/SearchForSomethingAnimation";
import { AnimatePresence, motion } from 'framer-motion';

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

    useEffect(() => {
        videoList.length && window.scrollTo(0, 0);
    }, [videoList]);

    if (!searchString)
        return (
            <VideoListStyled fullWidth={fullWidth}>
                <SearchForSomethingAnimation />
            </VideoListStyled>
        );

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
            <AnimatePresence>
                {videoList.map((video: VideoInterface, index: number) => (
                    <motion.div
                        key={video.id}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                        <VideoItem video={video} key={video.id} searchString={searchString} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </VideoListStyled>
    );
}