import {ModalOverlayStyled, ModalStyled} from "./Modal.styled";
import {useEffect} from "react";

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({children, onClose}: ModalProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <ModalOverlayStyled onClick={onClose}>
            <ModalStyled onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalStyled>
        </ModalOverlayStyled>
    );
}