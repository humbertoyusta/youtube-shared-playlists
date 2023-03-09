import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorAnimation from "../Animations/ErrorAnimation";
import Input from "../Input";
import Button from "../Buttons/Button";
import { ImportPlaylistFormStyled } from "./ImportPlaylistForm.styled";
import getRealYoutubePlaylist from "../../Services/RealYoutubePlaylistApi";
import VideoInterface from "../../Interfaces/VideoInterface";
import {
    createPlaylist,
    updatePlaylist,
} from "../../Services/YoutubePlaylistApi";

export default function ImportPlaylistForm() {
    const { handleSubmit, formState, register } = useForm<{
        playlistId: string;
        name: string;
    }>();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    if (error) return <ErrorAnimation />;

    async function handleImportPlaylist({
        playlistId,
        name,
    }: {
        playlistId: string;
        name: string;
    }): Promise<void> {
        try {
            const videoList: VideoInterface[] = await getRealYoutubePlaylist(
                playlistId
            );

            const createdPlaylistId = await createPlaylist(name);

            await updatePlaylist(createdPlaylistId, name, videoList);

            navigate(`/playlists/${createdPlaylistId}/edit`);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <ImportPlaylistFormStyled onSubmit={handleSubmit(handleImportPlaylist)}>
            <Input
                key={"name"}
                errors={formState.errors.name?.message?.toString()}
                label={"Name"}
                {...register("name", {
                    required: "Name is required",
                })}
            />
            <Input
                key={"playlistId"}
                errors={formState.errors.playlistId?.message?.toString()}
                label={"Playlist ID"}
                {...register("playlistId", {
                    required: "Playlist ID is required",
                })}
            />
            <Button
                text={"Import Playlist"}
                type="submit"
                disabled={formState.isSubmitting}
            />
        </ImportPlaylistFormStyled>
    );
}
