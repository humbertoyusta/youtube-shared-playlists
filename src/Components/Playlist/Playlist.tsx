import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {PlaylistButtonListStyled, PlaylistStyled} from "./Playlist.styled";
import AddSomethingAnimation from "../Animations/AddSomethingAnimation";
import CopyLinkButton from "../Buttons/CopyLinkButton";
import {useLocation} from "react-router-dom";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

type PlaylistProps = {
    videos: VideoInterface[];
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    shuffleVideos?: () => void;
    playVideo?: (videoId: string) => void;
}

export default function Playlist({videos, removeVideoFromPlaylist, shuffleVideos, playVideo}: PlaylistProps) {
    const location = useLocation();
    const currentVideoId = (new URLSearchParams(location.search).get("videoId")) || "";

    if (!videos.length)
        return (
            <PlaylistStyled>
                <AddSomethingAnimation/>
            </PlaylistStyled>
        );

    return (
        <PlaylistStyled>
            <PlaylistButtonListStyled>
                {shuffleVideos && videos.length >= 2 &&
                    <ButtonWithIcon key="shuffle" text="Shuffle" onClick={() => shuffleVideos()}/>
                }
                <CopyLinkButton link={window.location.origin + location.pathname}/>
            </PlaylistButtonListStyled>
            {videos.map(video => (
                <VideoItem
                    key={video.id}
                    video={video}
                    removeVideoFromPlaylist={removeVideoFromPlaylist}
                    is_active={video.id === currentVideoId}
                    playVideo={playVideo}
                />
            ))}
        </PlaylistStyled>
    )
}