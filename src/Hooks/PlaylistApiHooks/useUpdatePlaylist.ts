import VideoInterface from "../../Interfaces/VideoInterface";
import {useMutation, useQueryClient} from "react-query";
import axios from "axios";

const baseUrl = 'https://youtube.thorsteinsson.is';

export default function useUpdatePlaylist() {
    const queryClient = useQueryClient();

    return useMutation(
        ({playlistId, videos}: { playlistId: string, videos: VideoInterface[] }) =>
            axios.put(baseUrl + `/api/playlists/${playlistId}`, {
                name: Math.random().toString(),
                videos,
            }), {
            onSuccess: () => {
                queryClient.invalidateQueries('playlist');
            }
        }
    );
}