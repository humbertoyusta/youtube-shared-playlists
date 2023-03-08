import {
    CopyLinkButtonStyled,
    CopyLinkTextStyled,
} from "./CopyLinkButton.styled";
import { useState } from "react";
import { ReactComponent as CopyLinkIcon } from "./copy.svg";

export default function CopyLinkButton({ link }: { link: string }) {
    const [isCopied, setIsCopied] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }

    return (
        <CopyLinkButtonStyled onClick={handleCopy}>
            <CopyLinkIcon />
            <CopyLinkTextStyled>
                {isCopied ? "Copied!" : "Copy Link"}
            </CopyLinkTextStyled>
        </CopyLinkButtonStyled>
    );
}
