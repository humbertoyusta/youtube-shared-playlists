import VideoInterface from "../../Interfaces/VideoInterface";
import {
    VideoCardNoLinkStyled,
    VideoCardStyled,
    VideoInfoStyled,
    VideoThumbnailStyled,
    VideoTitleStyled
} from "./VideoItem.styled";
import React from "react";
import Button from "../Buttons/Button";

type VideoItemProps = {
    video: VideoInterface;
    searchString?: string;
    playlistVideos?: VideoInterface[];
    addToPlaylist?: (video: VideoInterface) => void;
}

export default function VideoItem({video, searchString, playlistVideos, addToPlaylist}: VideoItemProps) {
    const linkTo = {
        pathname: `/video/${video.id}`,
        search: searchString ? `?query=${searchString}` : ""
    };

    const toRender = (
        <>
            <VideoThumbnailStyled src={video.thumbnail} alt={video.title}/>
            <VideoInfoStyled>
                <VideoTitleStyled>{video.title}</VideoTitleStyled>
                {playlistVideos && addToPlaylist &&
                    <Button
                        text={"Add to playlist"}
                        onClick={() => addToPlaylist(video)}
                    />
                }
            </VideoInfoStyled>
        </>
    );

    return addToPlaylist ? (
        <VideoCardNoLinkStyled>
            {toRender}
        </VideoCardNoLinkStyled>
    ) : (
        <VideoCardStyled to={linkTo}>
            {toRender}
        </VideoCardStyled>
    );
}