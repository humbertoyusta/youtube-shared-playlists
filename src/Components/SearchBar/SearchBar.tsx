import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {SearchBarFormStyled, SearchBarInputStyled, SearchBarSubmitStyled} from "./SearchBar.styled";

export default function SearchBar() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const initialSearch = new URLSearchParams(location.search).get('query') || '';

    function handleSearchSubmit(search: string) {
        const navigateTo = {
            pathname: location.pathname.includes("/video/") ? location.pathname : "/search",
            search: `?query=${encodeURIComponent(search)}`,
        };
        navigate(navigateTo);
    }

    return (
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
    );
}