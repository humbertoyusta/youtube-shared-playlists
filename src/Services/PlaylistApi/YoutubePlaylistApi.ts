import axios from "axios";
import { YoutubeApiConfig } from "../../config";
import VideoInterface from "../../Interfaces/VideoInterface";
import { encodeVideo } from "../../Utils/parseVideo";

export const createPlaylist = async (name: string) => {
    const playlist = await axios.post(
        YoutubeApiConfig.baseUrl + "/api/playlists",
        { name: name }
    );
    return playlist.data.id;
};

export const updatePlaylist = async (
    playlistId: string,
    name: string,
    videos: VideoInterface[]
) => {
    await axios.put(YoutubeApiConfig.baseUrl + `/api/playlists/${playlistId}`, {
        name: name,
        videos: videos.map((video) => encodeVideo(video)),
    });
};
