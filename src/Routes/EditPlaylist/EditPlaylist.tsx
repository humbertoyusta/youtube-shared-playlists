import PlaylistManager from "../../Components/PlaylistManager";
import {EditPlaylistWrapperStyled} from "./EditPlaylist.styled";

export default function EditPlaylist() {
    return (
        <EditPlaylistWrapperStyled>
            <PlaylistManager withSearch/>
        </EditPlaylistWrapperStyled>
    );
}