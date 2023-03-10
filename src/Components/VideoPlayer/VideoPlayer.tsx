import {
    VideoPlayerDivStyled,
    VideoPlayerIframeStyled,
    VideoPlayerTitleStyled,
    VideoPlayerWrapperStyled,
} from "./VideoPlayer.styled";
import useGetVideo from "../../Hooks/useGetVideo";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import CopyLinkButton from "../Buttons/CopyLinkButton";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
    videoId: string;
    playlistId?: string;
    playNextVideo?: () => void;
};

const socket = io("http://localhost:3001");

export default function VideoPlayer({
    videoId,
    playlistId,
    playNextVideo,
}: VideoPlayerProps) {
    const { video, isLoading, error } = useGetVideo(videoId);
    const location = useLocation();
    const videoRef = useRef<ReactPlayer>(null);

    const handleRemotePlay = (seconds: number) => {
        videoRef.current?.getInternalPlayer()?.playVideo();
        const currentTime = videoRef.current?.getCurrentTime();
        if (currentTime) {
            const currentTimeDiff = Math.abs(currentTime - seconds);
            if (currentTimeDiff > 0.5) {
                videoRef.current?.getInternalPlayer()?.seekTo(seconds);
            }
        }
    };
    const handleRemotePause = (seconds: number) => {
        videoRef.current?.getInternalPlayer()?.pauseVideo();
        const currentTime = videoRef.current?.getCurrentTime();
        if (currentTime) {
            const currentTimeDiff = Math.abs(currentTime - seconds);
            if (currentTimeDiff > 0.5) {
                videoRef.current?.getInternalPlayer()?.seekTo(seconds);
            }
        }
    };

    useEffect(() => {
        const roomName = `video-${videoId}`;
        socket.emit("joinRoom", roomName);
        socket.on("play", handleRemotePlay);
        socket.on("pause", handleRemotePause);

        return () => {
            socket.off("play", handleRemotePlay);
            socket.off("pause", handleRemotePause);
            socket.emit("leaveRoom", roomName);
        };
    }, [videoId]);

    if (isLoading)
        return (
            <VideoPlayerWrapperStyled>
                <LoadingAnimation />
            </VideoPlayerWrapperStyled>
        );

    if (error) {
        return (
            <VideoPlayerWrapperStyled>
                <ErrorAnimation />
            </VideoPlayerWrapperStyled>
        );
    }

    if (video)
        return (
            <VideoPlayerWrapperStyled>
                <VideoPlayerIframeStyled
                    url={`https://www.youtube.com/embed/${video.id}`}
                    playing
                    controls
                    onEnded={playNextVideo ? () => playNextVideo() : () => {}}
                    onPlay={() =>
                        socket.emit("play", {
                            roomName: `video-${videoId}`,
                            seconds: videoRef.current?.getCurrentTime(),
                        })
                    }
                    onPause={() =>
                        socket.emit("pause", {
                            roomName: `video-${videoId}`,
                            seconds: videoRef.current?.getCurrentTime(),
                        })
                    }
                    ref={videoRef}
                />
                <VideoPlayerTitleStyled>{video.title}</VideoPlayerTitleStyled>
                <VideoPlayerDivStyled>
                    <CopyLinkButton
                        link={
                            playlistId
                                ? `${window.location.origin}/video/${videoId}`
                                : window.location.origin + location.pathname
                        }
                        text={"Copy Video Link"}
                    />
                </VideoPlayerDivStyled>
            </VideoPlayerWrapperStyled>
        );
    else return <></>;
}
