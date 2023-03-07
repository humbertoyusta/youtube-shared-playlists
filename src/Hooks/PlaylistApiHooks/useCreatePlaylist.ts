import {useMutation} from "react-query";
import axios from "axios";

const baseUrl = 'https://youtube.thorsteinsson.is';

export default function useCreatePlaylist() {
    return useMutation((name: string) =>
        axios.post(baseUrl + '/api/playlists', {
            name: name,
        }),
    );
}