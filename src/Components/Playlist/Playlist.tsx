import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {PlaylistStyled} from "./Playlist.styled";

export default function Playlist({videos}: { videos: VideoInterface[] }) {
    return (
        <PlaylistStyled>
            {videos.map(video => (
                <VideoItem key={video.id} video={video}/>
            ))}
        </PlaylistStyled>
    )
}