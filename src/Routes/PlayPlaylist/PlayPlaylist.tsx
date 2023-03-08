import PlaylistManager from "../../Components/PlaylistManager";
import { PlayPlaylistWrapperStyled } from "./PlayPlaylist.styled";

export default function PlayPlaylist() {
    return (
        <PlayPlaylistWrapperStyled>
            <PlaylistManager withPlayer />
        </PlayPlaylistWrapperStyled>
    );
}
