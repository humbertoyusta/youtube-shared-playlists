import useSWR from "swr";
import axios from "axios";
import VideoInterface from "../Interfaces/VideoInterface";
import { YoutubeApiConfig } from "../config";

const fetcher = (url: string) => axios.get(url);

export default function useGetVideo(videoId: string) {
    const { data, error, isLoading } = useSWR(
        `${YoutubeApiConfig.baseUrl}/api/videos/${videoId}`,
        fetcher
    );

    if (error) return { videoList: [], error, isLoading };

    if (isLoading) return { videoList: [], error, isLoading };

    const responseData = data?.data;

    const video: VideoInterface = {
        id: responseData.videoId,
        title: responseData.title,
        thumbnail: responseData.thumbnailUrl,
    };

    return { video, error, isLoading };
}
