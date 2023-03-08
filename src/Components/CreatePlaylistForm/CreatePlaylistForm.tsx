import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import { CreatePlaylistFormStyled } from "./CreatePlaylistForm.styled";
import Button from "../Buttons/Button";
import useCreatePlaylist from "../../Hooks/PlaylistApiHooks/useCreatePlaylist";
import ErrorAnimation from "../Animations/ErrorAnimation";
import LoadingAnimation from "../Animations/LoadingAnimation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CreatePlaylistForm() {
    const { handleSubmit, formState, register } = useForm();
    const { mutate, data, isLoading, isError } = useCreatePlaylist();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) navigate(`/playlists/${data.data.id}/edit`);
    }, [data, navigate]);

    async function handleCreatePlaylist({ name }: FieldValues) {
        mutate(name);
    }

    if (isLoading) return <LoadingAnimation />;

    if (isError) return <ErrorAnimation />;

    return (
        <CreatePlaylistFormStyled onSubmit={handleSubmit(handleCreatePlaylist)}>
            <Input
                errors={formState.errors.name?.message?.toString()}
                label={"Name"}
                {...register("name", { required: "Name is required" })}
            />
            <Button text={"Create Playlist"} type="submit" disabled={false} />
        </CreatePlaylistFormStyled>
    );
}
