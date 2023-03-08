import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {PlaylistStyled} from "./Playlist.styled";
import AddSomethingAnimation from "../Animations/AddSomethingAnimation";

type PlaylistProps = {
    videos: VideoInterface[];
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
}

export default function Playlist({videos, removeVideoFromPlaylist}: PlaylistProps) {
    if (!videos.length)
        return (
            <PlaylistStyled>
                <AddSomethingAnimation/>
            </PlaylistStyled>
        );

    return (
        <PlaylistStyled>
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