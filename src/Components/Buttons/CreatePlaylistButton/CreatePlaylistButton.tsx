import {
    CreatePlaylistButtonStyled,
    CreatePlaylistMotionAnimation,
    CreatePlaylistTextStyled
} from "./CreatePlaylistButton.styled";

type CreatePlaylistButtonProps = {
    onClick: () => void;
    delay?: number;
}

export default function CreatePlaylistButton({onClick, delay = 0}: CreatePlaylistButtonProps) {
    return (
        <CreatePlaylistMotionAnimation delay={delay}>
            <CreatePlaylistButtonStyled onClick={onClick}>
                <CreatePlaylistTextStyled>Create Playlist</CreatePlaylistTextStyled>
            </CreatePlaylistButtonStyled>
        </CreatePlaylistMotionAnimation>
    );
}