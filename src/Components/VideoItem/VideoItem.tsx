import VideoInterface from "../../Interfaces/VideoInterface";
import {VideoCardStyled, VideoInfoStyled, VideoThumbnailStyled} from "./VideoItem.styled";
import React from "react";

export default function VideoItem({video}: {video: VideoInterface}) {
    return (
        <VideoCardStyled>
            <VideoThumbnailStyled src={video.thumbnail} alt={video.title} />
            <VideoInfoStyled>{video.title}</VideoInfoStyled>
        </VideoCardStyled>
    );
}