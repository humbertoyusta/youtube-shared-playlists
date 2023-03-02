import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {SearchBarFormStyled, SearchBarInputStyled, SearchBarSubmitStyled} from "./SearchBar.styled";

export default function SearchBar() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    function handleSearchSubmit(search: string) {
        navigate(`/search?query=${encodeURIComponent(search)}`);
    }

    return (
        <SearchBarFormStyled
            onSubmit={handleSubmit((event) => handleSearchSubmit(event.search))}
        >
            <SearchBarInputStyled
                type="text"
                placeholder="Search"
                {...register("search")}
            />
            <SearchBarSubmitStyled type="submit" />
        </SearchBarFormStyled>
    );
}