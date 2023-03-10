import VideoInterface from "../../Interfaces/VideoInterface";
import {
    ButtonListDivStyled,
    VideoCardNoLinkStyled,
    VideoCardStyled,
    VideoInfoStyled,
    VideoThumbnailStyled,
    VideoTitleStyled,
} from "./VideoItem.styled";
import React from "react";
import Button from "../Buttons/Button";

type VideoItemProps = {
    video: VideoInterface;
    index?: number;
    playlistLength?: number;
    searchString?: string;
    is_active?: boolean;
    isVideoInPlaylist?: (video: VideoInterface) => boolean;
    addToPlaylist?: (video: VideoInterface) => void;
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    playVideo?: (videoId: string) => void;
    swapVideos?: (smallerIndex: number) => void;
};

export default function VideoItem({
    video,
    index,
    playlistLength,
    searchString,
    is_active = false,
    isVideoInPlaylist,
    addToPlaylist,
    removeVideoFromPlaylist,
    playVideo,
    swapVideos,
}: VideoItemProps) {
    const linkTo = {
        pathname: `/video/${video.id}`,
        search: searchString ? `?query=${searchString}` : "",
    };

    const toRender = (
        <>
            <VideoThumbnailStyled src={video.thumbnail} alt={video.title} />
            <VideoInfoStyled>
                <VideoTitleStyled>{video.title}</VideoTitleStyled>
                <ButtonListDivStyled>
                    {playVideo && (
                        <Button
                            key="play"
                            name="play"
                            text=""
                            onClick={() => playVideo(video.id)}
                        />
                    )}
                    {swapVideos && index !== undefined && index > 0 && (
                        <Button
                            key="up"
                            name="up"
                            text=""
                            onClick={() => swapVideos(index - 1)}
                        />
                    )}
                    {swapVideos &&
                        index !== undefined &&
                        playlistLength &&
                        index + 1 < playlistLength && (
                            <Button
                                key="down"
                                name="down"
                                text=""
                                onClick={() => swapVideos(index)}
                            />
                        )}
                    {addToPlaylist &&
                        isVideoInPlaylist &&
                        !isVideoInPlaylist(video) && (
                            <Button
                                key="add"
                                name="add"
                                text=""
                                onClick={() => addToPlaylist(video)}
                            />
                        )}
                    {removeVideoFromPlaylist && (
                        <Button
                            key="remove"
                            name="remove"
                            text=""
                            onClick={() => removeVideoFromPlaylist(video)}
                        />
                    )}
                </ButtonListDivStyled>
            </VideoInfoStyled>
        </>
    );

    return addToPlaylist || removeVideoFromPlaylist ? (
        <VideoCardNoLinkStyled is_active={is_active}>
            {toRender}
        </VideoCardNoLinkStyled>
    ) : (
        <VideoCardStyled to={linkTo}>{toRender}</VideoCardStyled>
    );
}
