import VideoList from "../../Components/VideoList";
import { SearchWrapperStyled } from "./Search.styled";

export default function Search() {
    return (
        <SearchWrapperStyled>
            <VideoList columns={3} />
        </SearchWrapperStyled>
    );
}
