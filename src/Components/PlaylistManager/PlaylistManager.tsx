import {useLocation, useNavigate, useParams} from "react-router-dom";
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
import VideoPlayer from "../VideoPlayer";

type PlaylistManagerProps = {
    withSearch?: boolean;
    withPlayer?: boolean;
}

export default function PlaylistManager({withSearch, withPlayer}: PlaylistManagerProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const {playlistId} = useParams<{ playlistId: string }>();
    const currentVideoId = (new URLSearchParams(location.search).get("videoId")) || "";
    const {isLoading, isError, data} = useGetPlaylist(playlistId || "");
    const addVideoToPlaylist = useAddVideoToPlaylist();
    const updatePlaylist = useUpdatePlaylist();

    if (isLoading)
        return <LoadingAnimation/>;

    if (isError)
        return <ErrorAnimation/>;

    const videos: VideoInterface[] = data.videos.map((video: any) => decodeVideo(video)) || [];

    if (withPlayer && !currentVideoId && videos.length)
        navigate(`${location.pathname}?videoId=${videos[0].id}`, {replace: true});

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

    function playNextVideo() {
        if (playlistId && videos.length >= 2) {
            const currentVideoIndex = videos.findIndex(video => video.id === currentVideoId);
            const nextVideo = videos[currentVideoIndex + 1] || videos[0];
            navigate(`${location.pathname}?videoId=${nextVideo.id}`, {replace: true});
        }
    }

    return (
        <PlaylistManagerStyled>
            {withPlayer && playlistId &&
                <VideoPlayer videoId={currentVideoId} playNextVideo={playNextVideo}/>
            }
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
    );
}