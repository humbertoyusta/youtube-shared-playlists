import { useMutation } from "react-query";
import axios from "axios";
import { YoutubeApiConfig } from "../../config";

export default function useCreatePlaylist() {
    return useMutation((name: string) =>
        axios.post(YoutubeApiConfig.baseUrl + "/api/playlists", {
            name: name,
        })
    );
}
