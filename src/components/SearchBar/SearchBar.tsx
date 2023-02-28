import {useForm} from "react-hook-form";
import {SearchBarFormStyled, SearchBarInputStyled, SearchBarSubmitStyled} from "./SearchBar.styled";

type Props = {
    handleSearchSubmit: (search: string) => void,
}

export default function SearchBar({handleSearchSubmit}: Props) {
    const {register, handleSubmit} = useForm();

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