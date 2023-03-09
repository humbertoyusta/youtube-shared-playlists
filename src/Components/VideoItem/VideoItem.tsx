import VideoInterface from "../../Interfaces/VideoInterface";
import {
    ButtonListDivStyled,
    VideoCardNoLinkStyled,
    VideoCardStyled,
    VideoInfoStyled,
    VideoThumbnailStyled,
    VideoTitleStyled,
} from "./VideoItem.styled";
import React, { forwardRef } from "react";
import Button from "../Buttons/Button";
import { DraggableProvided } from "react-beautiful-dnd";

type VideoItemProps = {
    video: VideoInterface;
    searchString?: string;
    is_active?: boolean;
    isVideoInPlaylist?: (video: VideoInterface) => boolean;
    addToPlaylist?: (video: VideoInterface) => void;
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    playVideo?: (videoId: string) => void;
    provided?: DraggableProvided;
};

const VideoItem = forwardRef<HTMLDivElement, VideoItemProps>(
    (
        {
            video,
            searchString,
            is_active = false,
            isVideoInPlaylist,
            addToPlaylist,
            removeVideoFromPlaylist,
            playVideo,
            provided,
        }: VideoItemProps,
        ref: any
    ) => {
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
            <VideoCardNoLinkStyled
                is_active={is_active}
                {...provided?.draggableProps}
                {...provided?.dragHandleProps}
                ref={ref}
            >
                {toRender}
            </VideoCardNoLinkStyled>
        ) : (
            <VideoCardStyled
                to={linkTo}
                {...provided?.draggableProps}
                {...provided?.dragHandleProps}
                ref={ref}
            >
                {toRender}
            </VideoCardStyled>
        );
    }
);

export default VideoItem;
