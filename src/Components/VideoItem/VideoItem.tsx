import VideoInterface from "../../Interfaces/VideoInterface";
import {
    ButtonListDivStyled,
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
    is_active?: boolean;
    isVideoInPlaylist?: (video: VideoInterface) => boolean;
    addToPlaylist?: (video: VideoInterface) => void;
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    playVideo?: (videoId: string) => void;
}

export default function VideoItem({
                                      video,
                                      searchString,
                                      is_active = false,
                                      isVideoInPlaylist,
                                      addToPlaylist,
                                      removeVideoFromPlaylist,
                                      playVideo,
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
                <ButtonListDivStyled>
                    {addToPlaylist && isVideoInPlaylist && !isVideoInPlaylist(video) &&
                        <Button key="add" name="add" text="" onClick={() => addToPlaylist(video)}/>
                    }
                    {removeVideoFromPlaylist &&
                        <Button key="remove" name="remove" text="" onClick={() => removeVideoFromPlaylist(video)}/>
                    }
                    {playVideo &&
                        <Button key="play" name="play" text="" onClick={() => playVideo(video.id)}/>
                    }
                </ButtonListDivStyled>
            </VideoInfoStyled>
        </>
    );

    return (addToPlaylist || removeVideoFromPlaylist) ? (
        <VideoCardNoLinkStyled is_active={is_active}>
            {toRender}
        </VideoCardNoLinkStyled>
    ) : (
        <VideoCardStyled to={linkTo}>
            {toRender}
        </VideoCardStyled>
    );
}