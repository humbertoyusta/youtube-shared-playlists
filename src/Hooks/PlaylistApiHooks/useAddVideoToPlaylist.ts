import VideoInterface from "../../Interfaces/VideoInterface";
import {useMutation, useQueryClient} from "react-query";
import axios from "axios/index";

const baseUrl = 'https://youtube.thorsteinsson.is';

export default function useAddVideoToPlaylist() {
    const queryClient = useQueryClient();

    return useMutation(
        ({playlistId, video}: { playlistId: string, video: VideoInterface }) =>
            axios.post(baseUrl + `/api/playlists/${playlistId}/videos`, {video}),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('playlist');
            },
        }
    );
}