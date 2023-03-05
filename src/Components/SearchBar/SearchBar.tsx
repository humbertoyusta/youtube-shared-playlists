import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {SearchBarFormStyled, SearchBarInputStyled, SearchBarSubmitStyled} from "./SearchBar.styled";
import {motion} from "framer-motion";

export default function SearchBar({delay = 0}: {delay?: number}) {
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
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "easeInOut",
                stiffness: 260,
                damping: 20,
                delay: delay,
                duration: 0.4,
            }}
        >
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
        </motion.div>
    );
}