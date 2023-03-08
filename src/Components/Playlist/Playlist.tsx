import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {PlaylistButtonListStyled, PlaylistStyled} from "./Playlist.styled";
import AddSomethingAnimation from "../Animations/AddSomethingAnimation";
import CopyLinkButton from "../Buttons/CopyLinkButton";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";

type PlaylistProps = {
    videos: VideoInterface[];
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    shuffleVideos?: () => void;
}

export default function Playlist({videos, removeVideoFromPlaylist, shuffleVideos}: PlaylistProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const {playlistId} = useParams<{ playlistId: string }>();

    if (!videos.length)
        return (
            <PlaylistStyled>
                <AddSomethingAnimation/>
            </PlaylistStyled>
        );

    return (
        <PlaylistStyled>
            <PlaylistButtonListStyled>
                <ButtonWithIcon key="play" text="Play" onClick={() => navigate(`/playlists/${playlistId}/play`)}/>
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
                />
            ))}
        </PlaylistStyled>
    )
}