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
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

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
                {addToPlaylist && isVideoInPlaylist && !isVideoInPlaylist(video) &&
                    <Button
                        text={"Add to playlist"}
                        onClick={() => addToPlaylist(video)}
                    />
                }
                {removeVideoFromPlaylist &&
                    <Button text={"Remove"} onClick={() => removeVideoFromPlaylist(video)}/>
                }
                {playVideo &&
                    <ButtonWithIcon key="play" text="Play" onClick={() => playVideo(video.id)}/>
                }
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