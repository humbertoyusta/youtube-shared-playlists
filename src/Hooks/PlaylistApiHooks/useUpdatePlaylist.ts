import VideoInterface from "../../Interfaces/VideoInterface";
import {useMutation, useQueryClient} from "react-query";
import axios from "axios";
import {encodeVideo} from "../../Utils/parseVideo";

const baseUrl = 'https://youtube.thorsteinsson.is';

type mutationFnParametersType = {
    playlistId: string,
    playlistName: string,
    videos: VideoInterface[]
}

export default function useUpdatePlaylist() {
    const queryClient = useQueryClient();

    return useMutation(
        ({playlistId, playlistName, videos}: mutationFnParametersType) =>
            axios.put(baseUrl + `/api/playlists/${playlistId}`, {
                name: playlistName,
                videos: videos.map(video => encodeVideo(video)),
            }), {
            onSuccess: () => {
                queryClient.invalidateQueries('playlist');
            }
        }
    );
}