import { useQuery } from "react-query";
import axios from "axios";
import { YoutubeApiConfig } from "../../config";

export default function useGetPlaylist(playlistId: string) {
    return useQuery(["playlist", playlistId], async () => {
        const { data } = await axios.get(
            YoutubeApiConfig.baseUrl + `/api/playlists/${playlistId}`
        );
        return data;
    });
}
