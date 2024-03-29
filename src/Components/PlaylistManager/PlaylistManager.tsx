import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetPlaylist from "../../Hooks/PlaylistApiHooks/useGetPlaylist";
import LoadingAnimation from "../Animations/LoadingAnimation";
import ErrorAnimation from "../Animations/ErrorAnimation";
import VideoInterface from "../../Interfaces/VideoInterface";
import { PlaylistManagerStyled } from "./PlaylistManager.styled";
import VideoList from "../VideoList";
import Playlist from "../Playlist";
import useAddVideoToPlaylist from "../../Hooks/PlaylistApiHooks/useAddVideoToPlaylist";
import { decodeVideo } from "../../Utils/parseVideo";
import useUpdatePlaylist from "../../Hooks/PlaylistApiHooks/useUpdatePlaylist";
import shuffleArray from "../../Utils/shuffleArray";
import VideoPlayer from "../VideoPlayer";
import { useEffect, useState } from "react";
import swapElements from "../../Utils/swapElements";

type PlaylistManagerProps = {
    withSearch?: boolean;
    withPlayer?: boolean;
};

export default function PlaylistManager({
    withSearch,
    withPlayer,
}: PlaylistManagerProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const { playlistId } = useParams<{ playlistId: string }>();
    const [currentVideoId, setCurrentVideoId] = useState("");
    const { isLoading, isError, data } = useGetPlaylist(playlistId || "");
    const addVideoToPlaylist = useAddVideoToPlaylist();
    const updatePlaylist = useUpdatePlaylist();
    const [playlistKey, setPlaylistKey] = useState(Math.random());

    useEffect(() => {
        if (location.search) {
            const urlParams = new URLSearchParams(location.search);
            const videoId = urlParams.get("videoId") || "";
            setCurrentVideoId(videoId);
        }
    }, [location]);

    useEffect(() => setPlaylistKey(Math.random()), [location]);

    if (isLoading) return <LoadingAnimation />;

    if (isError) return <ErrorAnimation />;

    const videos: VideoInterface[] =
        data.videos.map((video: any) => decodeVideo(video)) || [];
    const playlistName: string = data.name;

    function isVideoInPlaylist(video: VideoInterface) {
        return videos.some((playlistVideo) => playlistVideo.id === video.id);
    }

    function removeVideoFromPlaylist(video: VideoInterface) {
        if (playlistId) {
            videos.splice(videos.indexOf(video), 1);
            updatePlaylist.mutate({ playlistId, playlistName, videos });
        }
    }

    function shuffleVideos() {
        if (playlistId) {
            updatePlaylist.mutate({
                playlistId,
                playlistName,
                videos: shuffleArray(videos),
            });
        }
    }

    function swapVideos(smallerIndex: number) {
        if (playlistId) {
            updatePlaylist.mutate({
                playlistId,
                playlistName,
                videos: swapElements(videos, smallerIndex, smallerIndex + 1),
            });
        }
    }

    function playNextVideo() {
        if (playlistId && videos.length >= 2) {
            const currentVideoIndex = videos.findIndex(
                (video) => video.id === currentVideoId
            );
            const nextVideo = videos[currentVideoIndex + 1] || videos[0];
            navigate(`${location.pathname}?videoId=${nextVideo.id}`, {
                replace: true,
            });
        }
    }

    return (
        <PlaylistManagerStyled>
            {withPlayer && playlistId && currentVideoId && (
                <VideoPlayer
                    videoId={currentVideoId}
                    playlistId={playlistId}
                    playNextVideo={playNextVideo}
                />
            )}
            <Playlist
                key={playlistKey}
                name={playlistName}
                videos={videos}
                removeVideoFromPlaylist={removeVideoFromPlaylist}
                shuffleVideos={shuffleVideos}
                swapVideos={swapVideos}
                playVideo={(videoId: string) => {
                    navigate(
                        `${location.pathname.replace(
                            "/edit",
                            "/play"
                        )}?videoId=${videoId}`,
                        { replace: true }
                    );
                }}
            />
            {withSearch && playlistId && (
                <VideoList
                    columns={2}
                    addToPlaylist={(video: VideoInterface) => {
                        addVideoToPlaylist.mutate({ playlistId, video });
                    }}
                    isVideoInPlaylist={isVideoInPlaylist}
                />
            )}
        </PlaylistManagerStyled>
    );
}
