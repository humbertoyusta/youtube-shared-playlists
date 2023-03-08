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
    isVideoInPlaylist?: (video: VideoInterface) => boolean;
    addToPlaylist?: (video: VideoInterface) => void;
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
}

export default function VideoItem({
                                      video,
                                      searchString,
                                      isVideoInPlaylist,
                                      addToPlaylist,
                                      removeVideoFromPlaylist
                                  }: VideoItemProps) {
    const linkTo = {
        pathname: `/video/${video.id}`,
        search: searchString ? `?query=${searchString}` : ""
    };

    const toRender = (
        <>
            <VideoThumbnailStyled src={video.thumbnail} alt={video.title}/>
            <VideoInfoStyled>
                <VideoTitleStyled>{video.title}</VideoTitleStyled>
                {addToPlaylist && isVideoInPlaylist && !isVideoInPlaylist(video) &&
                    <Button
                        text={"Add to playlist"}
                        onClick={() => addToPlaylist(video)}
                    />
                }
                {removeVideoFromPlaylist &&
                    <Button text={"Remove"} onClick={() => removeVideoFromPlaylist(video)}/>
                }
            </VideoInfoStyled>
        </>
    );

    return (addToPlaylist || removeVideoFromPlaylist) ? (
        <VideoCardNoLinkStyled>
            {toRender}
        </VideoCardNoLinkStyled>
    ) : (
        <VideoCardStyled to={linkTo}>
            {toRender}
        </VideoCardStyled>
    );
}