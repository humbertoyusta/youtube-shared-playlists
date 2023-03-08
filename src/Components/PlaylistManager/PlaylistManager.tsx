import {useParams} from "react-router-dom";
import useGetPlaylist from "../../Hooks/PlaylistApiHooks/useGetPlaylist";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import VideoInterface from "../../Interfaces/VideoInterface";
import {PlaylistManagerStyled} from "./PlaylistManager.styled";
import VideoList from "../VideoList";
import Playlist from "../Playlist";
import useAddVideoToPlaylist from "../../Hooks/PlaylistApiHooks/useAddVideoToPlaylist";
import {decodeVideo} from "../../Utils/parseVideo";
import useUpdatePlaylist from "../../Hooks/PlaylistApiHooks/useUpdatePlaylist";
import shuffleArray from "../../Utils/shuffleArray";

export default function PlaylistManager({withSearch}: { withSearch?: boolean }) {
    const {playlistId} = useParams<{ playlistId: string }>();
    const {isLoading, isError, data} = useGetPlaylist(playlistId || "");
    const addVideoToPlaylist = useAddVideoToPlaylist();
    const updatePlaylist = useUpdatePlaylist();

    if (isLoading)
        return <LoadingAnimation/>;

    if (isError)
        return <ErrorAnimation/>;

    const videos: VideoInterface[] = data.videos.map((video: any) => decodeVideo(video)) || [];

    function isVideoInPlaylist(video: VideoInterface) {
        return videos.some(playlistVideo => playlistVideo.id === video.id);
    }

    function removeVideoFromPlaylist(video: VideoInterface) {
        if (playlistId) {
            videos.splice(videos.indexOf(video), 1);
            updatePlaylist.mutate({playlistId, videos});
        }
    }

    function shuffleVideos() {
        if (playlistId) {
            const shuffledVideos: VideoInterface[] = shuffleArray(videos);
            updatePlaylist.mutate({playlistId, videos: shuffledVideos});
        }
    }

    return (
        <PlaylistManagerStyled>
            <Playlist
                videos={videos}
                removeVideoFromPlaylist={removeVideoFromPlaylist}
                shuffleVideos={shuffleVideos}
            />
            {withSearch && playlistId &&
                <VideoList
                    columns={2}
                    addToPlaylist={(video: VideoInterface) => {
                        addVideoToPlaylist.mutate({playlistId, video});
                    }}
                    isVideoInPlaylist={isVideoInPlaylist}
                />
            }
        </PlaylistManagerStyled>
    )
}