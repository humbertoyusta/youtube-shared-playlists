import axios from "axios";
import useSWR from "swr";
import VideoInterface from "../Interfaces/VideoInterface";

const fetcher = (url: string) => axios.get(url);

type useGetVideoListReturnType = {
    videoList: VideoInterface[],
    error: any,
    isLoading: boolean,
}

export default function useGetVideoList(search: string): useGetVideoListReturnType {
    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/search?q=${search}`,
        fetcher,
    );

    if (error)
        return {videoList: [], error, isLoading};

    if (isLoading)
        return {videoList: [], error, isLoading};

    if (data?.data?.status === false)
        return {videoList: [], error, isLoading};

    const videoList = data?.data?.map((video: any) => ({
        id: video.id.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet?.thumbnails?.url,
    }));

    return {videoList, error, isLoading};
}