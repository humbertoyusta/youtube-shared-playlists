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

export default function PlaylistManager({withSearch}: { withSearch?: boolean }) {
    const {playlistId} = useParams<{ playlistId: string }>();
    const {isLoading, isError, data} = useGetPlaylist(playlistId || "");
    const addVideoToPlaylist = useAddVideoToPlaylist();

    if (isLoading)
        return <LoadingAnimation/>;

    if (isError)
        return <ErrorAnimation/>;

    const videos: VideoInterface[] = data.videos.map((video: any) => decodeVideo(video)) || [];

    return (
        <PlaylistManagerStyled>
            <Playlist videos={videos}/>
            {withSearch && playlistId &&
                <VideoList
                    columns={2}
                    playlistVideos={videos}
                    addToPlaylist={(video: VideoInterface) => {
                        console.log(video);
                        addVideoToPlaylist.mutate({playlistId, video});
                    }
                    }
                />
            }
        </PlaylistManagerStyled>
    )
}