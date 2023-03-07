import SearchBar from "../../Components/SearchBar";
import {WelcomeWrapperStyled} from "./Welcome.styled";
import Logo from "../../Components/Logo";
import Button from "../../Components/Buttons/Button";
import {useState} from "react";
import Modal from "../../Components/Modal";
import CreatePlaylistForm from "../../Components/CreatePlaylistForm";

export default function Welcome() {
    const [showForm, setShowForm] = useState(false);

    return (
        <WelcomeWrapperStyled>
            {showForm &&
                <Modal onClose={() => setShowForm(false)}>
                    <CreatePlaylistForm/>
                </Modal>
            }
            <Logo src={"/logo.png"} alt={"Logo"} link={"/"} big animated/>
            <SearchBar delay={1.2}/>
            <Button
                text={"Create Playlist"}
                animated
                delay={1.5}
                onClick={() => setShowForm(true)}
            />
        </WelcomeWrapperStyled>
    )
}