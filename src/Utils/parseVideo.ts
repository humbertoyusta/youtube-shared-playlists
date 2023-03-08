import VideoInterface from "../Interfaces/VideoInterface";

type VideoFromApi = {
    videoId: string,
    title: string,
    thumbnailUrl: string,
}

export const encodeVideo: (video: VideoInterface) => VideoFromApi = (video: VideoInterface) => {
    return {
        videoId: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail,
    }
}

export const decodeVideo: (video: VideoFromApi) => VideoInterface = (video: any) => {
    return {
        id: video.videoId,
        title: video.title,
        thumbnail: video.thumbnailUrl,
    }
}