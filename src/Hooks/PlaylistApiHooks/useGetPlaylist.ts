import { useQuery } from "react-query";
import axios from "axios";

const baseUrl = "https://youtube.thorsteinsson.is";

export default function useGetPlaylist(playlistId: string) {
    return useQuery(["playlist", playlistId], async () => {
        const { data } = await axios.get(
            baseUrl + `/api/playlists/${playlistId}`
        );
        return data;
    });
}
