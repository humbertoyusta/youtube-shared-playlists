import VideoPlayer from "../../Components/VideoPlayer";
import {useParams} from "react-router-dom";
import VideoList from "../../Components/VideoList";
import {VideoWrapperStyled} from "./Video.styled";
import ScrollToTop from "../../Components/ScrollToTop";
import React from "react";

export default function Video() {
    const {videoId} = useParams<{videoId: string}>();

    return (
        <>
            <ScrollToTop />
            <VideoWrapperStyled>
                {videoId &&
                    <VideoPlayer videoId={videoId} />
                }
                <VideoList fullWidth={false} />
            </VideoWrapperStyled>
        </>
    );
}