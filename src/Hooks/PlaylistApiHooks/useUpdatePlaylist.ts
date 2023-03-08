import VideoInterface from "../../Interfaces/VideoInterface";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { encodeVideo } from "../../Utils/parseVideo";
import { YoutubeApiConfig } from "../../config";

type mutationFnParametersType = {
    playlistId: string;
    playlistName: string;
    videos: VideoInterface[];
};

export default function useUpdatePlaylist() {
    const queryClient = useQueryClient();

    return useMutation(
        ({ playlistId, playlistName, videos }: mutationFnParametersType) =>
            axios.put(
                YoutubeApiConfig.baseUrl + `/api/playlists/${playlistId}`,
                {
                    name: playlistName,
                    videos: videos.map((video) => encodeVideo(video)),
                }
            ),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("playlist");
            },
        }
    );
}
