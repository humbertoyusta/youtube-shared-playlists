import VideoInterface from "../../Interfaces/VideoInterface";
import {VideoCardStyled, VideoInfoStyled, VideoThumbnailStyled, VideoTitleStyled} from "./VideoItem.styled";
import React from "react";

type VideoItemProps = {
    video: VideoInterface;
    searchString: string;
}

export default function VideoItem({video, searchString}: VideoItemProps) {
    const linkTo = {
        pathname: `/video/${video.id}`,
        search: searchString ? `?query=${searchString}` : ""
    };

    return (
        <VideoCardStyled to={linkTo}>
            <VideoThumbnailStyled src={video.thumbnail} alt={video.title} />
            <VideoInfoStyled>
                <VideoTitleStyled>{video.title}</VideoTitleStyled>
            </VideoInfoStyled>
        </VideoCardStyled>
    );
}