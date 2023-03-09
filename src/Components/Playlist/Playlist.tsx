import VideoInterface from "../../Interfaces/VideoInterface";
import VideoItem from "../VideoItem";
import {
    PlaylistButtonListStyled,
    PlaylistStyled,
    PlaylistTitleStyled,
    PlaylistWrapperStyled,
} from "./Playlist.styled";
import AddSomethingAnimation from "../Animations/AddSomethingAnimation";
import CopyLinkButton from "../Buttons/CopyLinkButton";
import { useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import shuffleArray from "../../Utils/shuffleArray";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

type PlaylistProps = {
    name: string;
    videos: VideoInterface[];
    removeVideoFromPlaylist?: (video: VideoInterface) => void;
    updateVideos?: (newVideos: VideoInterface[]) => void;
    playVideo?: (videoId: string) => void;
};

export default function Playlist({
    name,
    videos,
    removeVideoFromPlaylist,
    updateVideos,
    playVideo,
}: PlaylistProps) {
    const location = useLocation();
    const currentVideoId =
        new URLSearchParams(location.search).get("videoId") || "";

    const handleDragEnd = (result: any) => {
        if (updateVideos) {
            if (!result.destination) {
                return;
            }

            const newVideos = [...videos];
            const [reorderedItem] = newVideos.splice(result.source.index, 1);
            newVideos.splice(result.destination.index, 0, reorderedItem);

            updateVideos(newVideos);
        }
    };

    if (!videos.length)
        return (
            <PlaylistWrapperStyled>
                {name && (
                    <PlaylistTitleStyled>Playlist {name}</PlaylistTitleStyled>
                )}
                <PlaylistStyled>
                    <AddSomethingAnimation />
                </PlaylistStyled>
            </PlaylistWrapperStyled>
        );

    return (
        <PlaylistWrapperStyled>
            {name && <PlaylistTitleStyled>Playlist {name}</PlaylistTitleStyled>}
            <PlaylistStyled>
                <PlaylistButtonListStyled>
                    {updateVideos && videos.length >= 2 && (
                        <Button
                            key="shuffle"
                            name="shuffle"
                            text="Shuffle"
                            onClick={() => updateVideos(shuffleArray(videos))}
                        />
                    )}
                    <CopyLinkButton
                        link={window.location.origin + location.pathname}
                    />
                </PlaylistButtonListStyled>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="playlist">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {videos.map((video, index) => (
                                    <Draggable
                                        key={video.id}
                                        draggableId={video.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef}>
                                                <VideoItem
                                                    key={video.id}
                                                    video={video}
                                                    removeVideoFromPlaylist={
                                                        removeVideoFromPlaylist
                                                    }
                                                    is_active={
                                                        video.id ===
                                                        currentVideoId
                                                    }
                                                    playVideo={playVideo}
                                                    provided={provided}
                                                    ref={provided.innerRef}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </PlaylistStyled>
        </PlaylistWrapperStyled>
    );
}
