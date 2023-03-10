import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {
    PlaylistButtonListStyled,
    PlaylistStyled,
    PlaylistTitleStyled,
    PlaylistWrapperStyled,
    VideoItemAnimation,
} from "./Playlist.styled";
import AddSomethingAnimation from "../Animations/AddSomethingAnimation";
import CopyLinkButton from "../Buttons/CopyLinkButton";
import { useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import { AnimatePresence } from "framer-motion";

type PlaylistProps = {
    name: string;
    videos: VideoInterface[];
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    shuffleVideos?: () => void;
    playVideo?: (videoId: string) => void;
    swapVideos?: (smallerIndex: number) => void;
};

export default function Playlist({
    name,
    videos,
    removeVideoFromPlaylist,
    shuffleVideos,
    playVideo,
    swapVideos,
}: PlaylistProps) {
    const location = useLocation();
    const currentVideoId =
        new URLSearchParams(location.search).get("videoId") || "";

    if (!videos.length)
        return (
            <PlaylistWrapperStyled>
                {name && (
                    <PlaylistTitleStyled>Playlist {name}</PlaylistTitleStyled>
                )}
                <PlaylistStyled>
                    <AddSomethingAnimation />
                </PlaylistStyled>
            </PlaylistWrapperStyled>
        );

    return (
        <PlaylistWrapperStyled>
            {name && <PlaylistTitleStyled>Playlist {name}</PlaylistTitleStyled>}
            <PlaylistStyled>
                <PlaylistButtonListStyled>
                    {shuffleVideos && videos.length >= 2 && (
                        <Button
                            key="shuffle"
                            name="shuffle"
                            text="Shuffle"
                            onClick={() => shuffleVideos()}
                        />
                    )}
                    <CopyLinkButton
                        link={window.location.origin + location.pathname}
                    />
                </PlaylistButtonListStyled>
                <AnimatePresence>
                    {videos.map((video, index) => (
                        <VideoItemAnimation key={video.id}>
                            <VideoItem
                                key={video.id}
                                video={video}
                                removeVideoFromPlaylist={
                                    removeVideoFromPlaylist
                                }
                                is_active={video.id === currentVideoId}
                                playVideo={playVideo}
                                swapVideos={swapVideos}
                                index={index}
                                playlistLength={videos.length}
                            />
                        </VideoItemAnimation>
                    ))}
                </AnimatePresence>
            </PlaylistStyled>
        </PlaylistWrapperStyled>
    );
}
