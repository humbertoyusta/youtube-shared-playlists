import axios from "axios";
import { RealYoutubeApiConfig, YoutubeApiConfig } from "../config";
import VideoInterface from "../Interfaces/VideoInterface";

export default async function getRealYoutubePlaylist(
    playlistId: string
): Promise<VideoInterface[]> {
    const { data } = await axios.get(
        YoutubeApiConfig.baseUrl +
            `/api/import?playlistId=${playlistId}&key=${RealYoutubeApiConfig.apiKey}`
    );
    return data.items.map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
    }));
}
