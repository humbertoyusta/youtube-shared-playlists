import SearchBar from "../../Components/SearchBar";
import { WelcomeWrapperStyled } from "./Welcome.styled";
import Logo from "../../Components/Logo";
import Button from "../../Components/Buttons/Button";
import { useState } from "react";
import Modal from "../../Components/Modal";
import CreatePlaylistForm from "../../Components/CreatePlaylistForm";
import ImportPlaylistForm from "../../Components/ImportPlaylistForm";

export default function Welcome() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showImportForm, setShowImportForm] = useState(false);

    return (
        <WelcomeWrapperStyled>
            {showCreateForm && (
                <Modal onClose={() => setShowCreateForm(false)}>
                    <CreatePlaylistForm />
                </Modal>
            )}
            {showImportForm && (
                <Modal onClose={() => setShowImportForm(false)}>
                    <ImportPlaylistForm />
                </Modal>
            )}
            <Logo src={"/logo.png"} alt={"Logo"} link={"/"} big animated />
            <SearchBar delay={1.2} />
            <Button
                text={"Create Playlist"}
                animated
                delay={1.5}
                onClick={() => setShowCreateForm(true)}
            />
            <Button
                text={"Import Playlist (From Youtube)"}
                animated
                delay={1.5}
                onClick={() => setShowImportForm(true)}
            />
        </WelcomeWrapperStyled>
    );
}
