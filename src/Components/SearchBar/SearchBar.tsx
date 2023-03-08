import {useForm} from "react-hook-form";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {
    SearchBarFormStyled,
    SearchBarInputStyled,
    SearchBarMotionAnimation,
    SearchBarSubmitStyled
} from "./SearchBar.styled";

export default function SearchBar({delay = 0}: {delay?: number}) {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const {playlistId} = useParams<{ playlistId: string }>();
    const initialSearch = new URLSearchParams(location.search).get('query') || '';

    function handleSearchSubmit(search: string) {
        let nextUrl;
        if (location.pathname.includes("/video/"))
            nextUrl = location.pathname;
        else if (location.pathname.includes("/playlists/"))
            nextUrl = "/playlists/" + playlistId + "/edit";
        else
            nextUrl = "/search";
        const navigateTo = {
            pathname: nextUrl,
            search: `?query=${encodeURIComponent(search)}`,
        };
        navigate(navigateTo);
    }

    return (
        <SearchBarMotionAnimation delay={delay}>
            <SearchBarFormStyled
                onSubmit={handleSubmit((event) => handleSearchSubmit(event.search))}
            >
                <SearchBarInputStyled
                    type="text"
                    placeholder="Search"
                    defaultValue={initialSearch}
                    {...register("search")}
                />
                <SearchBarSubmitStyled type="submit" />
            </SearchBarFormStyled>
        </SearchBarMotionAnimation>
    );
}